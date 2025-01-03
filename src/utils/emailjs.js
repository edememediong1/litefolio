import emailjs from "@emailjs/browser";


export const sendEmail = (templateParams) => {
   try {
    emailjs.init(`D9xm9cd9VBmlpU7QLservice_dgbz3al`);

    return emailjs.sendForm(
        `service_dgbz3al`,
        `template_ttjp83r`,
        templateParams)
    } catch(error){
        console.log(error)
    }
}