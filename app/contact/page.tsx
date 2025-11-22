"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import cat from "../../public/images/cat.jpg";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto px-6 lg:px-12 py-24 gap-12 lg:gap-24 items-center justify-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md lg:w-1/2"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 aspect-[4/5]">
          <Image
            src={cat}
            fill
            alt="cat picture"
            className="object-cover"
            placeholder="blur"
            loading="lazy"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md lg:w-1/2"
      >
        <p className="text-sm font-medium text-indigo-400 tracking-widest font-geist mb-4 uppercase">
          Contact
        </p>
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6 font-geist tracking-tight">
          Get in touch
        </h2>
        <p className="text-neutral-400 mb-8 font-geist">
          Have a project in mind? Let's create something beautiful together.
          <br />
          <span className="text-white block mt-2">Shaunlm@live.co.uk</span>
        </p>

        <form
          action="https://formsubmit.co/chaun.online@gmail.com"
          method="POST"
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-neutral-300 font-geist">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="name"
                placeholder="Jane"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors font-geist"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-neutral-300 font-geist">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="last_name"
                placeholder="Doe"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors font-geist"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-neutral-300 font-geist">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="jane@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors font-geist"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-neutral-300 font-geist">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors font-geist resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white transition-all duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-neutral-900"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
