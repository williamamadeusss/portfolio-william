import AboutSection from "./components/about-section";
import BiodataSection from "./components/biodata-section";
import ProjectsSection from "./components/projects-section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <BiodataSection />
      <AboutSection />
      <ProjectsSection />

      <div id="contact" className="h-screen bg-green-500">
        contact
      </div>
    </main>
  );
}
