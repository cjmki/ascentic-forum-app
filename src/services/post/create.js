import models from '../../models/sql';
import mailer from '../../config/mailer';
import logger from '../../config/logger';
import mailGenerator from '../../util/mailGenerator';
import { ADMIN_EMAIL } from '../../util/constants/common';

export default async ({ userId, role, title, content }) => {
  const doc = await models.post.create({
    userId,
    approved: role === 'admin',
    title,
    content,
  });

  const template = mailGenerator.approvePost(ADMIN_EMAIL, doc.id);
  if (role !== 'admin') {
    try {
      const ak = await mailer.sendMail(template);
      logger.info(
        `mailer - sending approval request via email | to - ${ADMIN_EMAIL} | completed | response- ${ak.response}`
      );
    } catch (err) {
      logger.error(
        `mailer - sending approval request via email | to - ${ADMIN_EMAIL} | error - ${err}`
      );
    }
  }

  return doc;
};
