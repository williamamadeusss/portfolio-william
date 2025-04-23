import AboutSection from "./components/about-section";
import BiodataSection from "./components/biodata-section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <BiodataSection />
      <AboutSection />
      <div id="projects" className="h-screen bg-blue-500">
        contact
      </div>
      <div id="contact" className="h-screen bg-green-500">
        biodata
      </div>
    </main>
  );
}
