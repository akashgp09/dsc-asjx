import Head from "next/head";
import Sidebar from "../components/Sidebar/sidebar";
import SpeedDial from "../components/SpeedDial/speedDial";
import Schedule from "../components/Schedule/schedule";
import Speakers from "../components/Speakers/speakers";
import Sponsors from "../components/Sponsors/sponsors";
import Faq from "../components/Faq/faq";
import Rules from "../components/Rules/rules";
import Prizes from "../components/Prize/prizes";
import Intro from "../components/Intro/intro";
import Footer from "../components/Footer/footer";
export const META = {
  title: "ASJ-X Hackathon",
  name: "DSC KIIT",
  website: "https://asjx.dsckiit.tech",
  description:
    "DSC KIIT is organizing an Inter-University Hackathon ASJ-X. The goal of the hackathon is to pick a problem and come up with an application to help tackle it.",
  thumbnail: "https://i.imgur.com/q5YGcDd.png",
};
export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={META.description} />
        <meta name="copyright" content={META.name} />
        <meta name="robots" content="index,follow" />
        <meta name="url" content={META.website} />
        <meta name="identifier-URL" content={META.website} />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:site_name" content={META.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={META.website} />
        <meta property="og:image" content={META.thumbnail} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{META.title}</title>
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
      <SpeedDial />
      <Intro />
      <Schedule />
      <Rules />
      <Speakers />
      <Sponsors />
      <Prizes />
      <Faq />
      <Footer />
    </>
  );
}
