import AboutSection from "./components/about-section";
import BiodataSection from "./components/biodata-section";
import ContactSection from "./components/contact-section";
import ProjectsSection from "./components/projects-section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <BiodataSection />
      <AboutSection />
      <ProjectsSection />
      {/* <ContactSection /> */}
    </main>
  );
}
