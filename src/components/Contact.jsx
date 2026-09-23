import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import SocialLinks from "./ui/SocialLinks.jsx";
import Button from "./ui/Button.jsx";

const initialForm = { name: "", email: "", subject: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.subject.trim()) errors.subject = "Subject is required.";
  if (!form.message.trim()) errors.message = "Message is required.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");

    // ---------------------------------------------------------------
    // No email backend is connected yet. Wire this up to a real
    // service before deploying, for example:
    //   - Formspree:  POST to https://formspree.io/f/your-id
    //   - EmailJS:    emailjs.send(serviceId, templateId, form)
    //   - Resend:     POST to your own API route that calls Resend
    //   - Your own API: POST to /api/contact
    // Until then, this only simulates a submission and does not
    // actually send anything.
    // ---------------------------------------------------------------
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      throw new Error("No email service is connected yet.");
      // On success you would instead do:
      // setStatus("success");
      // setForm(initialForm);
    } catch (err) {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-ink/15 bg-paper-soft px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink/35 focus:border-amber dark:border-paper/15 dark:bg-ink-soft dark:placeholder:text-paper/35";

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-content px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Let's Build Something Together
            </h2>
            <p className="mt-4 max-w-sm text-ink/70 dark:text-paper/70">
              Have a project, idea, or opportunity? I'd love to hear about it.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:your-email@example.com"
                className="flex items-center gap-3 text-sm text-ink/75 hover:text-amber dark:text-paper/75"
              >
                <Mail size={18} /> ahmadmuhammadtijjani54@gmail.com
              </a>
              <p className="flex items-center gap-3 text-sm text-ink/75 dark:text-paper/75">
                <MapPin size={18} /> Nigeria
              </p>
            </div>

            <SocialLinks className="mt-8" />
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className={inputClasses}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={inputClasses}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                className={inputClasses}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1 text-xs text-red-500">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            <Button type="submit" variant="primary" className="w-full" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
              <p role="status" className="text-sm text-mint-dim dark:text-mint">
                Message sent — thanks for reaching out.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="text-sm text-red-500">
                No email service is connected yet, so this message wasn't sent. Connect Formspree,
                EmailJS, Resend, or your own API in src/components/Contact.jsx.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
