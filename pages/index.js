import Head from "next/head";
import Sidebar from "../components/Sidebar/sidebar";
import Speakers from "../components/Speakers/speakers";
import Sponsors from "../components/Sponsors/sponsors";
import Faq from "../components/Faq/faq";
export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="DSC ASJ-X" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            "DSC ASJ-X"
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content="DSC ASJ-X" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </Head>
      <Sidebar />
      <Speakers />
      <Sponsors />
      <Faq />
    </>
  );
}
