"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "fjrtelebot-vercel",
      desc: "A serverless-ready Telegram bot optimized for Vercel, built with Node.js and designed for fast, scalable deployments.",
    },
    {
      title: "fajimelist",
      desc: "A clean, fast, and responsive anime list web application built with Next.js and deployed on Vercel.",
    },
  ];

  return (
    <section
      id="projects"
      className="
        relative
        min-h-[100svh]
        flex
        flex-col
        justify-center
        items-center
        text-white
        px-6
        text-center
        overflow-hidden
      "
    >
      {/* Background utama */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-950" />

      {/* Lighting effects */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          relative
          z-10
          text-4xl
          md:text-5xl
          font-extrabold
          mb-14
          text-transparent
          bg-clip-text
          bg-gradient-to-r
          from-indigo-400
          to-purple-400
          drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]
        "
      >
        Featured Projects
      </motion.h2>

      {/* Cards */}
      <div className="relative z-10 grid gap-6 sm:grid-cols-2 max-w-5xl w-full">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="
              group
              bg-gray-800/40
              border
              border-indigo-500/20
              rounded-2xl
              p-6
              backdrop-blur-md
              transition-all
              duration-300
              shadow-[0_0_20px_rgba(99,102,241,0.15)]
              hover:shadow-[0_0_35px_rgba(139,92,246,0.45)]
            "
          >
            <h3 className="text-2xl font-semibold mb-3 text-indigo-300 group-hover:text-indigo-200 transition">
              {p.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
