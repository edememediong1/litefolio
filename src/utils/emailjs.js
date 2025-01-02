import emailjs from "@emailjs/browser";


export const sendEmail = (templateParams) => {
   
    return emailjs.send(
        'service_dgbz3al',
        'template_ttjp83r',
        templateParams,
        'D9xm9cd9VBmlpU7QLservice_dgbz3al'
    )
}