import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ app }) {
  const [showCaption, setVC] = useState(false); // Visible Caption

  return (
    <div
      onMouseOver={() => setVC(true)}
      onMouseLeave={() => setVC(false)}
      className="mx-auto relative mb-3 justify-center items-center flex overflow-hidden w-[calc(90%+20px)] h-[200px] border rounded-xl">
      <img src={app.background} className="min-h-full min-w-full" />
      {/* <Image src={app.background} layout="fill" loader={app.background}/> */}
      <Link href={app.link}>
        <a
          className={
            (showCaption ? "absolute" : "hidden") +
            " top-3/4 left-1/2 -translate-x-1/2 border bg-white"
          }>
          <p className="text-black px-2">Visit</p>
        </a>
      </Link>
    </div>
  );
}
