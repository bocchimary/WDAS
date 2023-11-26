import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import LandingComponents from "../components/Landing";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TUPC Water Dispenser Refill Alert System</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingComponents />
    </div>
  );
}