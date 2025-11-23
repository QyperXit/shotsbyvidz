"use client";

import { motion } from "framer-motion";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-6 py-24 lg:px-12">
      <div className="w-full max-w-[1000px] bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-8 text-4xl font-light tracking-tight text-white font-geist">
            Privacy Policy
          </h1>
          
          <div className="space-y-6 text-neutral-400 font-geist leading-relaxed">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">1. Introduction</h2>
              <p>
                Welcome to <strong>ShotsByVidz</strong> ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regards to your personal information, please contact us at <a href="mailto:shaunlm@live.co.uk" className="text-amber-400 hover:text-amber-300 transition-colors">shaunlm@live.co.uk</a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">2. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
              </p>
              <p>
                The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use. The personal information we collect may include the following:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Names</li>
                <li>Email addresses</li>
                <li>Contact preferences</li>
                <li>Any other information you choose to provide in your messages</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">3. How We Use Your Information</h2>
              <p>
                We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>To send you administrative information.</li>
                <li>To respond to your inquiries and offer support.</li>
                <li>To deliver services to the user.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">4. Sharing Your Information</h2>
              <p>
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal information to third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">5. Cookies and Tracking Technologies</h2>
              <p>
                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-medium text-white">6. Contact Us</h2>
              <p>
                If you have questions or comments about this policy, you may email us at <a href="mailto:shaunlm@live.co.uk" className="text-amber-400 hover:text-amber-300 transition-colors">shaunlm@live.co.uk</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
