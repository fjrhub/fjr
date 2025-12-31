export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        
        {/* Brand */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold text-white mb-3">
            FJRHUB
          </h3>
          <p className="text-sm leading-relaxed max-w-md">
            Developer yang tertarik pada sistem, jaringan, serta
            pengembangan web yang efisien dan rapi.
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
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">
            Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://github.com/fjrhub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:your@email.com"
                className="hover:text-indigo-400"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-center">
          © {new Date().getFullYear()} <span className="text-indigo-400">FJRHUB</span>. Built with Next.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
