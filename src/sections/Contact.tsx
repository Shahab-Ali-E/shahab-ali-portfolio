"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import Card from "@/components/Card";

export const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  const copyToClipboard = (text: string, setCopied: (value: boolean) => void) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy"); // Fallback for older browsers
      document.body.removeChild(textArea);

      setCopied(true);
      setTimeout(() => setCopied(false), 4000); // Reset after 4 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="py-14 z-0" id="contact-section">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-12 p-8 md:p-7 lg:p-7 rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400">
          {/* Text Content */}
          <div className="text-center md:text-start md:w-2/3 lg:w-3/4 flex flex-col gap-1 md:gap-2 z-20">
            <h3 className="text-gray-950 text-2xl md:text-3xl font-serif">
              Let&apos;s create something amazing together
            </h3>
            <p className="text-black text-sm md:text-base max-w-[270px] md:max-w-sm lg:max-w-4xl">
              Ready to bring your next project to life? Let&apos;s connect and
              discuss how I can help you achieve your goals.
            </p>
          </div>
          {/* Contact Button */}
          <div className="inline-flex justify-center h-fit z-20">
            <button
              onClick={toggleOverlay}
              className="flex gap-3 items-center text-white bg-gray-900 rounded-xl px-5 py-3"
            >
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleOverlay}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col text-start"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <Card className="p-7 md:p-10 text-start">
              <h4 className="text-2xl md:text-4xl font-bold mb-4 font-sans text-white/90">
                Get In <span className="text-white/50">touch</span>
              </h4>

              {/* Phone */}
              <div className="flex flex-col gap-2 md:gap-3 mt-6 md:mt-8 ml-6 group">
                <h5 className="text-sm text-white/60">Phone</h5>
                <button
                  className="inline-flex gap-2 text-base md:text-xl font-semibold hover:text-gray-300 transition"
                  onClick={() => copyToClipboard("+923125279990", setCopiedPhone)}
                >
                  (+92) 3125-279990
                  {copiedPhone ? (
                    <Check className="w-5 h-5 text-green-500 transition" />
                  ) : (
                    <Copy className="w-5 h-5 text-white/70 group-hover:text-white transition" />
                  )}
                </button>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2 md:gap-3 mt-4 ml-6 group">
                <h5 className="text-sm text-white/60 font-semibold">Email</h5>
                <button
                  className="inline-flex gap-2 text-base md:text-xl font-semibold hover:text-gray-300 transition"
                  onClick={() => copyToClipboard("shahabalihassan46@gmail.com", setCopiedEmail)}
                >
                  shahabalihassan46@gmail.com
                  {copiedEmail ? (
                    <Check className="w-5 h-5 text-green-500 transition" />
                  ) : (
                    <Copy className="w-5 h-5 text-white/70 group-hover:text-white transition" />
                  )}
                </button>
              </div>
            </Card>
          </motion.div>
        </div>
      )}
    </section>
  );
};
