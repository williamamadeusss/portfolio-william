import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-ivory h-screen">
      {/* navbar */}
      <div className="p-6 h-20 sticky flex justify-between items-center  bg-beige">
        <p>William Amadeus</p>
        <div className="flex gap-4 ">
          <p>About</p>
          <p>Experiences</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </div>

      {/* content */}
      <div className="">content</div>
    </main>
  );
}
