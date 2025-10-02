import Script from "next/script";
import AboutSection from "./components/about-section";
import BiodataSection from "./components/biodata-section";
import ContactSection from "./components/contact-section";
import ProjectsSection from "./components/projects-section";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "William Amadeus",
    jobTitle: "Software Engineer & Frontend Developer",
    url: "https://portfolio-william-jet.vercel.app/",
    image:
      "https://portfolio-william-jet.vercel.app/images/projects/homepage-portfolio.webp",
    sameAs: [
      "https://github.com/williamamadeusss",
      "https://www.linkedin.com/in/william-amadeus-86667a224/",
    ],
  };
  return (
    <>
      <main className="flex flex-col">
        <BiodataSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Script
        id="json-ld-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
