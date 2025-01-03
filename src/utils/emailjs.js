import emailjs from "@emailjs/browser";


export const sendEmail = (form) => {
   try {
    emailjs.init(`D9xm9cd9VBmlpU7QL`);

    return emailjs.sendForm(
        `service_dgbz3al`,
        `template_ttjp83r`,
        form)
    } catch(error){
        console.log(error)
    }
}