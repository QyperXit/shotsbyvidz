"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import cat from "../../public/images/cat.jpg";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-6 py-24 lg:px-12">
      <div className="w-full max-w-[1200px] bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative overflow-hidden shadow-2xl rounded-2xl ring-1 ring-white/10 aspect-[4/5]">
              <Image
                src={cat}
                fill
                alt="cat picture"
                className="object-cover transition-transform duration-700 hover:scale-105"
                placeholder="blur"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-8">
              <p className="mb-4 text-sm font-medium tracking-widest uppercase text-amber-400 font-geist">
                Contact
              </p>
              <h2 className="mb-6 text-4xl font-light tracking-tight text-white md:text-5xl font-geist">
                Get in touch
              </h2>
              <p className="text-neutral-400 font-geist">
                Have a project in mind? Let&apos;s create something beautiful together.
                <br />
                <span className="block mt-2 text-white">Shaunlm@live.co.uk</span>
              </p>
            </div>

            <form
              action="https://formsubmit.co/chaun.online@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-neutral-300 font-geist">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="name"
                    placeholder="Jane"
                    className="w-full px-4 py-3 text-white transition-all border rounded-lg bg-neutral-950/50 border-white/10 placeholder-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-geist"
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
                    className="w-full px-4 py-3 text-white transition-all border rounded-lg bg-neutral-950/50 border-white/10 placeholder-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-geist"
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
                  className="w-full px-4 py-3 text-white transition-all border rounded-lg bg-neutral-950/50 border-white/10 placeholder-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-geist"
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
                  className="w-full px-4 py-3 text-white transition-all border rounded-lg resize-none bg-neutral-950/50 border-white/10 placeholder-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-geist"
                  required
                ></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full shiny-cta focus:outline-none">
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
