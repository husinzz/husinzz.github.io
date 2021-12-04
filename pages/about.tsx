import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="md:w-8/12 md:mx-auto">
        <div className="py-10 text-right">
          <Link href="/">
            <a className="text-white text-xl mx-3">Go back home</a>
          </Link>
        </div>
        <main>
          <h1 className="text-4xl font-bold px-2 text-white">About us</h1>
          <p className="md:text-xl text-md text-white py-2 px-2 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam vero veritatis quos enim facilis quod ea atque doloremque vitae laborum. Repudiandae eius, deleniti hic maiores ex nobis sit minima aliquid. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum vel harum reprehenderit commodi voluptatem tenetur et aliquam consequuntur ipsa hic ea quos cum quod excepturi dolorem est distinctio, consectetur eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus aspernatur doloribus, beatae doloremque at dicta, nihil, rerum totam ipsa eius aliquid eaque. Minima totam enim corrupti tempora nesciunt doloribus.</p>
          <p className="md:text-xl text-md text-white py-2 px-2 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam vero veritatis quos enim facilis quod ea atque doloremque vitae laborum. Repudiandae eius, deleniti hic maiores ex nobis sit minima aliquid. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum vel harum reprehenderit commodi voluptatem tenetur et aliquam consequuntur ipsa hic ea quos cum quod excepturi dolorem est distinctio, consectetur eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus aspernatur doloribus, beatae doloremque at dicta, nihil, rerum totam ipsa eius aliquid eaque. Minima totam enim corrupti tempora nesciunt doloribus.</p>
        </main>
      </div>
    </>
  );
}
