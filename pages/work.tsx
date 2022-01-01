import { useState } from "react";
import Link from "next/link";
import ProjectCard from "../components/project-card";
import SEO from "../components/seo";

const apps: app[] = [
  {
    name: "apalah.tech",
    link: "https://apalah.tech",
    background: "/apps/apalah.png",
    platform: "Web",
  },
  {
    name: "Coords Generator",
    link: "https://apalah.tech/generate-coords-try",
    background: "/apps/coordgen.png",
    platform: "Web",
  },
  {
    name: "ToNote-Try",
    link: "#",
    background: "/apps/tonote.png",
    platform: "Mobile",
  },
];

export default function Work() {
  const [filter, setFilter] = useState([]);
  const [mobileActive, setMobile] = useState(false);
  const [webActive, setWeb] = useState(false);

  return (
    <section className="h-full max-w-[1024px] mx-auto">
      <SEO title="Our Work - Apalah Tech">

      </SEO>
      {/* Desktop */}
      <div className="hidden md:flex justify-between items-center p-2 text-right">
        <div className="flex justify-start items-center py-2">
          <h2 className="text-white text-2xl">things ive made</h2>
          <button
            className={
              "border px-2 mx-2 " +
              (mobileActive ? "bg-white text-black" : "text-white")
            }
            onClick={() => {
              setMobile(!mobileActive);
              filterManager("mobile", filter, setFilter, mobileActive);
            }}>
            Mobile
          </button>
          <button
            className={
              "border px-2 mx-2 " +
              (webActive ? "bg-white text-black" : "text-white")
            }
            onClick={() => {
              setWeb(!webActive);
              filterManager("web", filter, setFilter, webActive);
            }}>
            Web
          </button>
        </div>
        <Link href="/">
          <a className="text-white text-2xl">back</a>
        </Link>
      </div>

      {/* Mobile */}
      <div className="md:hidden py-2 text-center px-1">
        <div className="flex items-center justify-between p-2">
          <h2 className="text-white text-2xl">things ive made</h2>
          <Link href="/">
            <a className="text-white text-2xl">back</a>
          </Link>
        </div>

        <div className="my-3">
          <button
            className={
              "border px-4 py-3 mx-2 " +
              (mobileActive ? "bg-white text-black" : "text-white")
            }
            onClick={() => {
              setMobile(!mobileActive);
              filterManager("mobile", filter, setFilter, mobileActive);
            }}>
            Mobile
          </button>
          <button
            className={
              "border px-3 py-3 mx-2 " +
              (webActive ? "bg-white text-black" : "text-white")
            }
            onClick={() => {
              setWeb(!webActive);
              filterManager("web", filter, setFilter, webActive);
            }}>
            Web
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-1">
        {apps.map((app, index) => {
          if (filter.length <= 0) {
            return <ProjectCard app={app} key={index} />;
          } else if (filter.includes(app.platform.toLowerCase())) {
            return <ProjectCard app={app} key={index} />;
          }
        })}
      </div>
    </section>
  );
}

interface app {
  name: string;
  link: string;
  background: string;
  platform: string;
}

function filterManager(
  item: string,
  filterList: string[],
  setFilter: (a: string[]) => void,
  active: boolean
) {
  if (!active) {
    setFilter(filterList.concat(item));
  } else {
    setFilter(filterList.filter((e) => e !== item));
  }
}
