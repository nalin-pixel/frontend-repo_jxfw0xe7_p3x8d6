import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 flex items-center gap-2 text-violet-300">
          <Mail size={18} />
          <h2 className="text-3xl font-semibold">Let’s build something futuristic</h2>
        </div>
        <p className="mb-6 text-white/70">
          I’m open to collaborations, freelance work, and full-time roles. Send a quick note and I’ll get back
          to you.
        </p>
        <form
          className="grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            form.reset();
            alert('Thanks! Your message has been sent.');
          }}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-violet-400/40 focus:ring"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email address"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-violet-400/40 focus:ring"
          />
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your message"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-violet-400/40 focus:ring"
          />
          <button
            type="submit"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-violet-500 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400"
          >
            Send Message <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
