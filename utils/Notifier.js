// utils/Notifier.js
const nodemailer = require('nodemailer');

async function sendAlert(subject, message, screenshotPath = null) {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"Health Check Bot" <${process.env.EMAIL_USER}>`,
      to: process.env.ALERT_EMAIL || "admin@yourcompany.com",
      subject: `🚨 ALERT: ${subject}`,
      html: `<p>${message.replace(/\n/g, '<br>')}</p>`,
      attachments: []
    };

    if (screenshotPath) {
      mailOptions.attachments.push({
        filename: 'error-screenshot.png',
        path: screenshotPath
      });
      
      // Optional: Embed the image directly in the email body
      mailOptions.html += `<br><img src="cid:uniqueFailureImg"/>`;
      mailOptions.attachments[0].cid = 'uniqueFailureImg';
    }

    await transporter.sendMail(mailOptions);
    console.log('✅ Alert email sent successfully');
  } catch (error) {
    console.error('❌ Failed to send alert email:', error.message);
    // Don't throw - we don't want email failures to break the test flow
  }
}

module.exports = { sendAlert };
