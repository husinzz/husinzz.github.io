import Link from "next/link";
import SEO from "../components/seo";

export default function About() {
  return (
    <>
      <div className="md:w-8/12 md:mx-auto">
        <SEO title="About - Apalah Tech">

        </SEO>
        <div className="py-10 text-right">
          <Link href="/">
            <a className="text-white text-xl mx-3">Go back home</a>
          </Link>
        </div>
        <main>
          <h1 className="text-4xl font-bold px-2 text-white">About us</h1>
          <p className="md:text-xl text-md text-white py-2 px-2 text-justify">Hi, Welcome to apalah tech, this is the place where i express my passion when it comes to technology.</p>
          <p className="md:text-xl text-md text-white py-2 px-2 text-justify">The name apalah comes from the word Whatever it literally just mean whatever, it comes from frustration of trying to make a meaningful name for a website to show all my Technological endeavors. currently im pursuing my passion in web development while also working as a freelancer and a full time web developer.</p>
          <p className="md:text-xl text-md text-white py-2 px-2 text-justify">Thats all lol got nothin else</p>
        </main>
      </div>
    </>
  );
}
