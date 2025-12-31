export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      
      {/* CTA */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Interested in working together?
          </h2>
          <p className="text-sm mb-6">
            Let’s build something useful and efficient.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-2 rounded-lg bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        
        {/* Brand */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold text-white mb-3">
            FJRHUB
          </h3>
          <p className="text-sm leading-relaxed max-w-md">
            A developer who enjoys understanding systems, exploring
            hardware & software, and building efficient web-based tools.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-indigo-400">Home</a></li>
            <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
            <li><a href="#about" className="hover:text-indigo-400">About</a></li>
            <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">
            Tech Stack
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Next.js / React</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
            <li>Linux (Debian)</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <span>
            © {new Date().getFullYear()} FJRHUB. All rights reserved.
          </span>

          <div className="flex gap-4">
            <a
              href="https://github.com/fjrhub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              GitHub
            </a>
            <a
              href="mailto:your@email.com"
              className="hover:text-indigo-400"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
