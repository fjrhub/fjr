export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 border-t border-gray-800">
      <p>
        © {new Date().getFullYear()} <span className="text-indigo-400">FJRHUB</span>.  
        Built with ❤️ using Next.js + Tailwind CSS.
      </p>
    </footer>
  );
}
