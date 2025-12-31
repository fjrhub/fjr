export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto py-6 px-4 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-indigo-400 font-medium">FJRHUB</span>.{" "}
          Built with ❤️ using Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
