"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "FJR Telebot",
      desc: "A powerful Telegram bot built with Node.js, supporting multiple APIs.",
    },
    {
      title: "Fajimelist",
      desc: "A clean and responsive anime list web app powered by Next.js.",
    },
    {
      title: "Smart Lamp Control",
      desc: "ESP32-based IoT project for controlling lights via local web server.",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center 
                 bg-gradient-to-b from-gray-900 to-black text-white px-6 text-center relative overflow-hidden"
    >
      {/* efek cahaya halus biar nyatu sama hero */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full top-1/3 left-[-100px]" />
        <div className="absolute w-[350px] h-[350px] bg-purple-500/10 blur-[100px] rounded-full bottom-0 right-[-100px]" />
      </div>

      <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] relative z-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/40 border border-indigo-500/20 rounded-2xl p-6 
                       shadow-[0_0_15px_rgba(99,102,241,0.15)] hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] 
                       backdrop-blur-sm transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-indigo-300">
              {p.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
