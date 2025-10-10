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
      className="h-screen flex flex-col justify-center bg-black text-white px-6"
    >
      <h2 className="text-4xl font-bold mb-10 text-center text-indigo-400">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/30 transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
            <p className="text-gray-400">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
