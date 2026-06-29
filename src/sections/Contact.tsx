"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Copy, Check, Mail } from "lucide-react";
import Card from "../components/Card";

export const ContactSection = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const reduced = useReducedMotion();

  const copyToClipboard = (
    text: string,
    setCopied: (v: boolean) => void
  ) => {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="py-14 z-0" id="contact-section">
      <div className="container">
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-12 p-8 md:p-7 rounded-2xl bg-gradient-to-r from-emerald-300 to-sky-400"
          initial={reduced ? {} : { opacity: 0, y: 24 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-10%" }}
        >
          <div className="text-center md:text-start md:w-2/3 lg:w-3/4 flex flex-col gap-1 md:gap-2">
            <h2 className="text-gray-950 text-2xl md:text-3xl font-serif">
              Let&apos;s create something amazing together
            </h2>
            <p className="text-gray-900/80 text-sm md:text-base max-w-sm lg:max-w-4xl">
              Ready to bring your next project to life? Let&apos;s connect and
              discuss how I can help you achieve your goals.
            </p>
          </div>

          <div className="inline-flex justify-center h-fit z-20">
            <button
              onClick={() => setIsOpen(true)}
              className="flex gap-3 items-center text-white bg-gray-900 rounded-lg px-5 py-3 font-semibold hover:bg-gray-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              <Mail className="size-4" aria-hidden="true" />
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-dialog-title"
        >
          <motion.div
            initial={reduced ? {} : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduced ? {} : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="p-7 md:p-10 border border-[var(--border)] bg-[var(--surface)] rounded-2xl outline-none">
              <h3
                id="contact-dialog-title"
                className="text-2xl md:text-4xl font-bold font-sans text-[var(--text)]"
              >
                Get In{" "}
                <span className="text-[var(--text-muted)]">touch</span>
              </h3>

              <div className="flex flex-col gap-2 md:gap-3 mt-6 md:mt-8 ml-6 group">
                <p className="text-sm text-[var(--text-muted)]">Phone</p>
                <button
                  className="inline-flex gap-2 text-base md:text-xl font-semibold text-[var(--text)] hover:text-[var(--primary)] transition-colors"
                  onClick={() =>
                    copyToClipboard("+923125279990", setCopiedPhone)
                  }
                  aria-label="Copy phone number to clipboard"
                >
                  (+92) 3125-279990
                  {copiedPhone ? (
                    <Check className="w-5 h-5 text-emerald-400" aria-label="Copied" />
                  ) : (
                    <Copy className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--text)] transition" />
                  )}
                </button>
              </div>

              <div className="flex flex-col gap-2 md:gap-3 mt-4 ml-6 group">
                <p className="text-sm text-[var(--text-muted)] font-semibold">
                  Email
                </p>
                <button
                  className="inline-flex gap-2 text-base md:text-xl font-semibold text-[var(--text)] hover:text-[var(--primary)] transition-colors"
                  onClick={() =>
                    copyToClipboard(
                      "shahabalihassan46@gmail.com",
                      setCopiedEmail
                    )
                  }
                  aria-label="Copy email address to clipboard"
                >
                  shahabalihassan46@gmail.com
                  {copiedEmail ? (
                    <Check className="w-5 h-5 text-emerald-400" aria-label="Copied" />
                  ) : (
                    <Copy className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--text)] transition" />
                  )}
                </button>
              </div>

              <button
                className="mt-8 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </Card>
          </motion.div>
        </div>
      )}
    </section>
  );
};
