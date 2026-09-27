import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ArrowRight, Github, Linkedin, Mail, Send } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import { email, socials } from "../data/links.js";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

// EmailJS credentials
const SERVICE_ID = "service_bmrzy6a";
const TEMPLATE_ID = "template_dml1rro";
const PUBLIC_KEY = "1ic0jcwP_fkHsDPX0";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );

      setStatus("sent");
      setForm(initialForm);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-void text-bone">
      <div className="shell pt-24 sm:pt-32 pb-20 sm:pb-24">
        <SectionLabel
          level="11"
          label="Next Level"
          title=""
          theme="void"
        />

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="font-display font-extrabold text-bone text-[11vw] sm:text-6xl lg:text-7xl leading-[0.98] tracking-tight max-w-3xl"
        >
          The journey isn&rsquo;t over.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-md text-bone-muted leading-relaxed"
        >
          Every project taught me something. Every bug made me better. Every
          problem gave me another way to think. Now I&rsquo;m ready for the next
          level.
        </motion.p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${email}`}
                className="btn-solid-invert"
              >
                Let&rsquo s Connect
                <ArrowRight size={15} className="btn-arrow" />
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-invert"
              >
                View My GitHub
              </a>
            </div>

            <div className="space-y-3 pt-2">
              <ContactRow
                icon={<Mail size={16} />}
                label={email}
                href={`mailto:${email}`}
              />

              <ContactRow
                icon={<Github size={16} />}
                label="github.com/IshitaGujarathi"
                href={socials.github}
                external
              />

              <ContactRow
                icon={<Linkedin size={16} />}
                label="Connect on LinkedIn"
                href={socials.linkedin}
                external
              />
            </div>
          </motion.div>

          <motion.form
            id="contact-form"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="border border-bone/[0.15] bg-void-raised p-6 sm:p-7 space-y-4"
          >
            <Field
              id="name"
              label="Name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />

            <Field
              id="email"
              label="Email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-[11px] tracking-wide uppercase text-bone-muted mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                className="w-full border border-bone/[0.15] bg-void px-4 py-2.5 text-[14px] text-bone placeholder:text-bone-muted/60 focus:border-rust-bright/60 focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-solid-invert w-full justify-center"
            >
              {status === "sending" ? "Sending..." : "Send Message"}

              {status !== "sending" && (
                <Send size={14} className="btn-arrow" />
              )}
            </button>

            {status === "sent" && (
              <p className="text-[12.5px] text-bone-muted text-center pt-1">
                Message sent successfully. Thanks for reaching out!
              </p>
            )}

            {status === "error" && (
              <p className="text-[12.5px] text-red-400 text-center pt-1">
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[11px] tracking-wide uppercase text-bone-muted mb-2"
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-bone/[0.15] bg-void px-4 py-2.5 text-[14px] text-bone placeholder:text-bone-muted/60 focus:border-rust-bright/60 focus:outline-none transition-colors"
      />
    </div>
  );
}

function ContactRow({ icon, label, href, external }) {
  return (
    <a
      href={href}
      {...(external
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      className="flex items-center gap-3 text-[13.5px] text-bone-muted hover:text-bone transition-colors"
    >
      <span className="flex h-8 w-8 items-center justify-center border border-bone/[0.15]">
        {icon}
      </span>

      {label}
    </a>
  );
}
