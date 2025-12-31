export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-gray-400">
        
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            FJRHUB
          </h3>
          <p className="text-sm leading-relaxed">
            Developer focused on understanding systems, building code,
            and creating tools that simplify life.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#projects" className="hover:text-indigo-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://fjr.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">
            Connect
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://github.com/fjrhub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:your@email.com"
                className="hover:text-indigo-400 transition"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} FJRHUB. All rights reserved.
      </div>
    </footer>
  );
}
