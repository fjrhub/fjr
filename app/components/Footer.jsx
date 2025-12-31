export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-gray-950" />

      {/* Lighting effect */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-500/20 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 text-center py-10 px-4 border-t border-white/10">
        <p className="text-gray-400 text-sm md:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="text-indigo-400 font-semibold">FJRHUB</span>.{" "}
          Built with{" "}
          <span className="text-red-400">❤️</span>{" "}
          using{" "}
          <span className="text-indigo-300 font-medium">
            Next.js & Tailwind CSS
          </span>
          .
        </p>

        {/* Small divider */}
        <div className="mt-4 flex justify-center">
          <span className="h-[2px] w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>
      </div>
    </footer>
  );
}
