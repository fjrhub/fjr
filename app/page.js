import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-6 text-center">
      <h1 className="text-5xl font-extrabold tracking-wide mb-4">
        Hello, I'm <span className="text-indigo-400">FJRHUB</span>
      </h1>
      <p className="text-gray-300 max-w-md leading-relaxed mb-8">
        A passionate web developer who builds clean, responsive, and modern
        websites using Next.js and Tailwind CSS.
      </p>
      <div className="space-x-4">
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
    </main>
  );
}