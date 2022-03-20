import config from '../config/config';

const generator = {};

const COMMON = {
  from: '"Ascentic Test Forum App 👻" <app.ascentic@codesk.lk>',
};

generator.approvePost = (email, postId) => {
  const template = COMMON;
  const body = `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                    <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                      <h1 style="font-size: 38px; font-weight: 400; margin: 2;">Hi Admin!</h1> <img src=" https://img.icons8.com/clouds/100/000000/handshake.png" width="125" height="120" style="display: block; border: 0px;" />
                    </td>
                </tr>
              </table><br>
              <h1 style="font-size: 18px; font-weight: 400; margin: 2;">Please verify and approve this post ${config.frontendHost}/post/approve?id=${postId}</h1><br><br>
              <b>We Two Works Team</b>
              `;
  template.to = email;
  template.subject = `[admin] - ascentic test app | post approval ✔`;
  template.html = body;
  return template;
};

export default generator;
