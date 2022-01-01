import Head from "next/head"

export default function SEO(props) {
  return(
    <Head>
      <meta name="description" content={props.description} />
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.svg" />
      {props.children}
    </Head>
  )
}