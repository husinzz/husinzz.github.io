import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";
import AppPage, { project } from "../components/project-section";

const projects: project[] = [
  {
    name: "Appname",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Husin",
    job: "Software Engineer",
  },
  {
    name: "Appname",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Husin",
    job: "Software Engineer",
  },
  {
    name: "Appname",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Husin",
    job: "Software Engineer",
  },
  {
    name: "Appname",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Husin",
    job: "Software Engineer",
  },
  {
    name: "Appname",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Husin",
    job: "Software Engineer",
  },
  {
    name: "Appname",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Husin",
    job: "Software Engineer",
  },
  {
    name: "Appname",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Husin",
    job: "Software Engineer",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <p className="fixed top-10 left-40 text-fig-black hidden lg:block">
        thats a beaver with a hat
      </p>
      <p className="fixed bottom-10 right-40 text-fig-black hidden lg:block">
        his our mascot
      </p>
      <section className="h-full md:grid grid-cols-2">
        <div className="flex h-full flex-col items-center justify-center">
          <div className="">
            <h1 className="font-bold text-4xl text-white">Hi, Welkom</h1>
            <h2 className="text-xl text-white">We make awesome apps</h2>
          </div>
          <nav className="md:hidden py-5">
              <Link href="/work">
                <a className="text-white text-2xl">Our Work</a>
              </Link>
              <span className="text-2xl text-white">|</span>
              <Link href="/about">
                <a className="text-white text-2xl">About us</a>
              </Link>
          </nav>
        </div>
        <div className="md:flex flex-col items-center justify-center hidden">
          <nav className="text-center">
            <Link href="/work">
              <a className="text-white text-2xl hover:text-4xl">Our Work</a>
            </Link>
            <hr className="w-52" />
            <Link href="/about">
              <a className="text-white text-2xl hover:text-4xl">About us</a>
            </Link>
          </nav>
        </div>
        <Footer />
      </section>

      {/* {projects.map((project: project, index: number) => {
        return (
          <AppPage
            key={index}
            name={project.name}
            description={project.description}
            author={project.author}
            job={project.job}
          />
        );
      })} */}
    </>
  );
};

export default Home;
