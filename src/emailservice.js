import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export const sendEmail = (form) => {
  return emailjs
    .sendForm(
      'YOUR_SERVICE_ID',  // Replace with your Service ID
      'YOUR_TEMPLATE_ID', // Replace with your Template ID
      form.current,       // Form reference
      'YOUR_PUBLIC_KEY'   // Replace with your Public Key
    )
    .then(
      (result) => {
        console.log(result.text);
        form.current.reset(); // Reset form fields
        toast.success("Email sent successfully!");
      },
      (error) => {
        console.error(error.text);
        toast.error("Failed to send email. Please try again.");
      }
    );
};
