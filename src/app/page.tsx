import Image from "next/image";
import Header from "./header/header";
import Content from "./content/content";

export default function Home() {
  return (
    <main>
      <Header />
      <Content />
    </main>
  );
}
