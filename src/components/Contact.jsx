import { createElement, useRef, useState } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sending Email
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use Vite environment variables
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully!');
        form.current.reset();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster position="top-center" />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />

        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="border border-slate-600 p-3 rounded bg-transparent"
            />
            <input
              type="email"
              name="reply_to"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Your Email"
              required
              className="border border-slate-600 p-3 rounded bg-transparent"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="border border-slate-600 p-3 rounded h-44 bg-transparent"
              required
            ></textarea>
            <button
              className="btn self-start bg-white text-dark_primary disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a 
                  className="font-Poppins hover:text-gray-300 transition-colors" 
                  href={content.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;