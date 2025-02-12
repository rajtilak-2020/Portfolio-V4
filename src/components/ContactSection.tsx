"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const BLUR_FADE_DELAY = 0.04;

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://formspree.io/f/mgvedwbv", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully! ✅");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send the message. ❌ Server error.");
    }
  };

  return (
    <section id="contact" className="py-12">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto mt-8 space-y-4 relative"
      >
        <div className="input-wrapper">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <textarea
            name="message"
            placeholder="Your Message..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <button
          type="submit"
          className={`send-button ${status === "Message sent! ✅" ? "success" : status === "Failed to send. ❌ Server error." ? "error" : ""}`}
        >
          Send Message
        </button>
        {status && <p className="status-text">{status}</p>}
      </form>
    </section>
  );
}