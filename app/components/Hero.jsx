"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = ["Web Developer", "Tech Explorer", "Creative Coder"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const typingSpeed = deleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!deleting && displayText.length < current.length) {
        setDisplayText(current.slice(0, displayText.length + 1));
      } else if (deleting && displayText.length > 0) {
        setDisplayText(current.slice(0, displayText.length - 1));
      } else if (!deleting && displayText.length === current.length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && displayText.length === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, deleting, index]);

  return (
    <section
      className="
        relative 
        min-h-[100svh] 
        flex 
        items-center 
        justify-center 
        text-white 
        overflow-hidden
      "
    >
      {/* Background utama (lebih terang) */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-gray-900 to-black" />

      {/* Glow / lighting */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />

      {/* Overlay lembut */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hello, I'm <span className="text-indigo-400">FJRHUB</span>
        </h1>

        <p className="text-gray-200 text-lg md:text-xl h-8 mb-8">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full shadow-lg transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-indigo-400 hover:bg-indigo-500 hover:text-white px-6 py-2 rounded-full transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
