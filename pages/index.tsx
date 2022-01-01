import type { NextPage } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import SEO from "../components/seo";

const Home: NextPage = () => {
  return (
    <>
      <section className="h-full md:grid grid-cols-2 max-w-[1440px] mx-auto">
        <SEO title="Home - Apalah Tech">

        </SEO>
        <div className="flex h-full flex-col items-center justify-center">
          <div className="">
            <h1 className="font-bold text-4xl text-white">Hi, Welkom</h1>
            <h2 className="text-xl text-white">We make awesome apps</h2>
          </div>
          <nav className="md:hidden py-5">
            <Link href="/work">
              <a className="text-white text-2xl">Our Work</a>
            </Link>
            <span className="text-2xl text-white px-2">|</span>
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
    </>
  );
};

export default Home;
