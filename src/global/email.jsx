import emailjs from "@emailjs/browser";

export const sendCustomEmail = ({ data }) => {
    emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
    emailjs
        .send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            {
                name: data.name,
                email: data.email,
                phone: data.phone,
                message: data.message
            }
        )
        .then(response => {
            console.log("SUCCESS!", response.status, response.text);
        })
        .catch(err => {
            console.log("FAILED...", err);
        });
};