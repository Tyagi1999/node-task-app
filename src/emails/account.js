const sgMail = require('@sendgrid/mail')

//const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'adarshtyagi044@gmail.com',
        subject: 'Thanks for joining me',
        text: `Welcome to app, ${name}. Let me know about you.`
    })
}

const sendByeEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'adarshtyagi044@gmail.com',
        subject: 'Sorry to see you are going.',
        text: 'This is not fair'
    })
}
module.exports = {
    sendWelcomeEmail,
    sendByeEmail
}