import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-28">
        <Navbar />
        <section id="hero" className="pt-20 sm:pt-16">
          <Hero />
        </section>
        <section id="technologies" className="pt-20 sm:pt-16">
          <Technologies />
        </section>
        <section id="projects" className="pt-20 sm:pt-16">
          <Projects />
        </section>
        <section id="experience" className="pt-20 sm:pt-16">
          <Experience />
        </section>
        <section id="contact" className="pt-20 sm:pt-16">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
