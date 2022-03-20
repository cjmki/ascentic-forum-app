import NotFoundError from '../../exceptions/NotFoundError';
import models from '../../models/sql';
import sqlClient from '../../config/sql/sqlClient';
import mailGenerator from '../../util/mailGenerator';
import mailer from '../../config/mailer';
import logger from '../../config/logger';

const { Op } = sqlClient.Sequelize;
const { literal } = sqlClient.Sequelize;

export default async (params) => {
  // FIXME : updatedAt will change if content changed | filter out updatedAt triggered by approved col change
  const query = [
    {
      updatedAt: {
        [Op.gt]: literal("NOW() - INTERVAL '24 HOURS'"),
      },
    },
    { approved: true },
  ];

  const doc = await models.post.findAndCountAll({
    where: query,
    attributes: { exclude: ['content', 'approved', 'createdAt'] },
  });

  if (!doc) {
    throw new NotFoundError('no post found');
  }

  const tamplate = mailGenerator.postSummary(
    params.email,
    params.firstName,
    doc.rows
  );

  try {
    const ak = await mailer.sendMail(tamplate);
    logger.info(
      `mailer - sending approval request via email | to - ${params.email} | completed | response- ${ak.response}`
    );
  } catch (err) {
    logger.error(
      `mailer - sending approval request via email | to - ${params.email} | error - ${err}`
    );
  }
  await mailer.sendMail(tamplate);

  return doc;
};
