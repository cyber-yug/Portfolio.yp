import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter for Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Send contact form email
export const sendContactEmail = async (contactData) => {
  try {
    const transporter = createTransporter();

    // Email to you (admin)
    const adminMailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Inquiry - ${contactData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Inquiry</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            
            <!-- Header -->
            <div style="background-color: #2c3e50; padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 300;">New Contact Inquiry</h1>
              <p style="color: #ecf0f1; margin: 10px 0 0 0; font-size: 14px;">Portfolio Website Contact Form</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              
              <!-- Contact Information -->
              <div style="margin-bottom: 30px;">
                <h2 style="color: #2c3e50; font-size: 18px; margin: 0 0 20px 0; font-weight: 600;">Contact Information</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #ecf0f1; width: 120px;">
                      <strong style="color: #34495e;">Full Name:</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #ecf0f1; color: #2c3e50;">
                      ${contactData.name}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #ecf0f1;">
                      <strong style="color: #34495e;">Email:</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #ecf0f1; color: #2c3e50;">
                      <a href="mailto:${contactData.email}" style="color: #3498db; text-decoration: none;">${contactData.email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0;">
                      <strong style="color: #34495e;">Submitted:</strong>
                    </td>
                    <td style="padding: 12px 0; color: #7f8c8d; font-size: 14px;">
                      ${new Date().toLocaleString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric', 
                        hour: '2-digit', 
                        minute: '2-digit'
                      })}
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- Message -->
              <div style="margin-bottom: 30px;">
                <h2 style="color: #2c3e50; font-size: 18px; margin: 0 0 15px 0; font-weight: 600;">Message</h2>
                <div style="background-color: #f8f9fa; border-left: 4px solid #3498db; padding: 20px; border-radius: 0 4px 4px 0;">
                  <p style="color: #2c3e50; line-height: 1.6; margin: 0; white-space: pre-wrap; font-size: 15px;">
                    ${contactData.message}
                  </p>
                </div>
              </div>
              
              <!-- Call to Action -->
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${contactData.email}?subject=Re: Contact Form Inquiry" 
                   style="display: inline-block; background-color: #3498db; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: 500;">
                  Reply to ${contactData.name}
                </a>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background-color: #ecf0f1; padding: 20px 30px; text-align: center; border-top: 1px solid #bdc3c7;">
              <p style="color: #7f8c8d; font-size: 12px; margin: 0;">
                This message was sent from your portfolio website contact form.<br>
                To ensure delivery, please add ${contactData.email} to your contacts.
              </p>
            </div>
            
          </div>
        </body>
        </html>
      `
    };

    // Auto-reply email to the sender
    const autoReplyOptions = {
      from: `"Yug Patel" <${process.env.EMAIL_FROM}>`,
      to: contactData.email,
      subject: 'Thank you for your inquiry - Yug Patel',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Your Inquiry</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            
            <!-- Header -->
            <div style="background-color: #2c3e50; padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 300;">Thank You for Your Inquiry</h1>
              <p style="color: #ecf0f1; margin: 10px 0 0 0; font-size: 14px;">Yug Patel - Professional Portfolio</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              
              <!-- Greeting -->
              <div style="margin-bottom: 25px;">
                <p style="color: #2c3e50; font-size: 16px; margin: 0 0 15px 0;">
                  Dear ${contactData.name},
                </p>
                <p style="color: #34495e; line-height: 1.6; margin: 0;">
                  Thank you for reaching out through my portfolio website. I have received your message and appreciate your interest in my work and services.
                </p>
              </div>
              
              <!-- Next Steps -->
              <div style="background-color: #f8f9fa; border-left: 4px solid #3498db; padding: 25px; margin: 25px 0; border-radius: 0 4px 4px 0;">
                <h3 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">What happens next?</h3>
                <ul style="color: #34495e; line-height: 1.6; margin: 0; padding-left: 20px;">
                  <li style="margin-bottom: 8px;">I will carefully review your message and requirements</li>
                  <li style="margin-bottom: 8px;">You can expect a personalized response within 24-48 hours</li>
                  <li style="margin-bottom: 8px;">For urgent matters, feel free to call me directly at +91 9558551573</li>
                </ul>
              </div>
              
              <!-- Professional Info -->
              <div style="margin: 30px 0;">
                <h3 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">About My Services</h3>
                <p style="color: #34495e; line-height: 1.6; margin: 0 0 15px 0;">
                  I specialize in full-stack development, cybersecurity analysis, and SOC operations. Whether you're looking for web development, security consulting, or technical expertise, I'm here to help bring your vision to life.
                </p>
              </div>
              
              <!-- Connect Section -->
              <div style="margin: 30px 0;">
                <h3 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">Stay Connected</h3>
                <div style="margin: 15px 0;">
                  <table style="width: 100%;">
                    <tr>
                      <td style="padding: 8px 0;">
                        <a href="https://www.linkedin.com/in/yug-patel-287186307" style="color: #3498db; text-decoration: none; display: inline-block;">
                          🔗 LinkedIn Profile
                        </a>
                      </td>
                      <td style="padding: 8px 0;">
                        <a href="https://github.com/cyber-yug" style="color: #3498db; text-decoration: none; display: inline-block;">
                          💻 GitHub Portfolio
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0;">
                        <a href="https://www.instagram.com/the.yugpatel" style="color: #3498db; text-decoration: none; display: inline-block;">
                          📸 Instagram
                        </a>
                      </td>
                      <td style="padding: 8px 0;">
                        <a href="mailto:ypsworkstation@gmail.com" style="color: #3498db; text-decoration: none; display: inline-block;">
                          📧 Direct Email
                        </a>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background-color: #2c3e50; padding: 25px 30px; text-align: center;">
              <div style="margin-bottom: 15px;">
                <h4 style="color: #ffffff; margin: 0 0 5px 0; font-size: 18px; font-weight: 400;">Yug Patel</h4>
                <p style="color: #ecf0f1; margin: 0; font-size: 14px;">Full-Stack Developer | SOC Analyst | Cybersecurity Specialist</p>
              </div>
              <div style="border-top: 1px solid #34495e; padding-top: 15px; margin-top: 15px;">
                <p style="color: #bdc3c7; font-size: 12px; margin: 0;">
                  📧 ypsworkstation@gmail.com | 📱 +91 9558551573<br>
                  📍 Vadodara, Gujarat, India
                </p>
              </div>
              <div style="margin-top: 15px;">
                <p style="color: #95a5a6; font-size: 11px; margin: 0;">
                  This is an automated response. Please do not reply to this email.<br>
                  For direct communication, use the contact information provided above.
                </p>
              </div>
            </div>
            
          </div>
        </body>
        </html>
      `
    };

    // Send both emails
    const adminResult = await transporter.sendMail(adminMailOptions);
    const autoReplyResult = await transporter.sendMail(autoReplyOptions);

    console.log('Admin email sent:', adminResult.messageId);
    console.log('Auto-reply sent:', autoReplyResult.messageId);

    return {
      success: true,
      adminEmailId: adminResult.messageId,
      autoReplyId: autoReplyResult.messageId
    };

  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

// Test email configuration
export const testEmailConnection = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ Email server connection verified');
    return true;
  } catch (error) {
    console.error('❌ Email server connection failed:', error);
    return false;
  }
};