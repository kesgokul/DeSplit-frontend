import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import PayForm from "@/components/PayForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>DeSplit</title>
        <meta
          name="description"
          content="Decentralized app for spliting payment with friends"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>PAY AND SPLIT</h1>
        <PayForm />
      </main>
    </>
  );
}
