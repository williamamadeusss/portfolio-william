import Image from "next/image";
import Header from "./header/header";
import Content from "./content/content";

export default function Home() {
  return (
    <main className="bg-ivory h-screen">
      <Header />
      <Content />
    </main>
  );
}
