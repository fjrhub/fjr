import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
