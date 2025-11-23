"use client";

import { motion } from "framer-motion";
import React from "react";

const TermsOfService = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-6 py-24 lg:px-12">
      <div className="w-full max-w-[1000px] bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-8 text-4xl font-light tracking-tight text-white font-geist">
            Terms of Service
          </h1>
          
          <div className="space-y-6 text-neutral-400 font-geist leading-relaxed">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">1. Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and <strong>ShotsByVidz</strong> ("we," "us," or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
              </p>
              <p>
                The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">3. User Representations</h2>
              <p>
                By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">4. Governing Law</h2>
              <p>
                These Terms shall be governed by and defined following the laws of the United Kingdom. ShotsByVidz and yourself irrevocably consent that the courts of the United Kingdom shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">5. Contact Us</h2>
              <p>
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:shaunlm@live.co.uk" className="text-amber-400 hover:text-amber-300 transition-colors">shaunlm@live.co.uk</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
