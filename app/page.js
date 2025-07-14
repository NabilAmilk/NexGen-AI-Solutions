'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen w-full relative overflow-hidden bg-black text-white">
      {/* Logo and Company Name */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center gap-4 px-8 pt-10"
      >
        <img src="/logo.png" alt="NexGen AI Logo" className="h-16 w-auto" />
        <h1 className="text-3xl font-bold text-blue-400">NexGen AI</h1>
      </motion.div>

      {/* Slogan */}
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.5 }}
        className="text-2xl md:text-4xl font-bold text-center mt-16 text-white"
      >
        We don’t just sell AI, we sell results.
      </motion.h2>

      {/* Intro paragraph */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-6 max-w-2xl mx-auto text-center text-lg text-gray-300 px-4"
      >
        Based in South Africa, we help businesses around the globe integrate intelligent AI solutions. Whether you're AI-savvy or completely new, we walk you through it — from discovery to deployment.
      </motion.p>

      {/* Placeholder for more sections */}
      <div className="mt-20 text-center text-gray-500">
        {/* Add Header, Services, Testimonials, Form, etc. as components later */}
        <p>[More sections coming soon...]</p>
      </div>
    </main>
  );
}
