import sgMail from '@sendgrid/mail';
import website from '../config/site-data.json'

export const sendEmail = function({ toUser, subject, text, htmlString, activateId, templateData }) {

  sgMail.setApiKey(process.env.SENDGRID);

  const link = { link: website.url + "activate/" + activateId };
  const dynamicObject = templateData ? templateData : {};
  const data = activateId ? link : dynamicObject;
    
  const msg = {
    to: toUser.email,
    from: website.email,
    subject: subject ? subject : 'Sup',
    text: text ? text : 'Broh',
    html: htmlString ? htmlString : '<h1>Sup, Broh?</h1>',
    template_id: process.env.SENDGRID_TEMPLATE,
    dynamic_template_data: data,
  };

  return sgMail.send(msg);

}