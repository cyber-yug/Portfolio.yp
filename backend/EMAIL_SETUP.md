# Email Setup Guide for Portfolio Contact Form

## Gmail Configuration Steps

### 1. Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to "Security"
3. Enable 2-factor authentication if not already enabled

### 2. Generate App Password
1. Go to Google Account settings → Security
2. Click on "2-Step Verification"
3. Scroll down and click "App passwords"
4. Select "Mail" as the app
5. Select "Other" as the device and name it "Portfolio Website"
6. Copy the generated 16-character password

### 3. Update Environment Variables
Replace `your_app_password_here` in the `.env` file with your actual app password:

```
EMAIL_PASS=your_16_character_app_password
```

### 4. Alternative Email Providers

#### Using Outlook/Hotmail:
```
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your_password
```

#### Using Custom SMTP:
```
EMAIL_HOST=your_smtp_server.com
EMAIL_PORT=587 or 465
EMAIL_USER=your_email@domain.com
EMAIL_PASS=your_password
```

## Features Included

### 1. Admin Notification Email
- Sent to your email (ypsworkstation@gmail.com)
- Contains sender's name, email, and message
- Cyberpunk-styled HTML template
- Timestamp and source tracking

### 2. Auto-Reply Email
- Sent to the person who submitted the form
- Professional thank you message
- Links to your social media profiles
- Sets expectations for response time

### 3. Database Storage
- All messages are still saved to MongoDB
- Backup in case email fails
- Admin panel access for viewing submissions

## Security Features

- Email validation
- Rate limiting to prevent spam
- Input sanitization
- Error handling and logging

## Testing

1. Start the backend server
2. Check console for "✅ Email server connection verified"
3. Submit a test message through the contact form
4. Check both your email and the sender's email

## Troubleshooting

### Common Issues:
1. **Authentication Error**: Make sure you're using an app password, not your regular password
2. **Connection Refused**: Check if the SMTP settings are correct
3. **Emails in Spam**: Add your domain to trusted senders

### Debug Steps:
1. Check server console for email-related logs
2. Verify .env file configuration
3. Test with a simple email first
4. Check Gmail security settings