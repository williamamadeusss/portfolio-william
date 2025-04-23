import BiodataSection from "./components/content/biodata-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-40">
      <BiodataSection />
      <div id="projects" className="h-screen bg-red-500">
        project
      </div>
      <div id="contact" className="h-screen bg-blue-500">
        contact
      </div>
      <div id="about" className="h-screen bg-green-500">
        biodata
      </div>
    </main>
  );
}
