import type { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LargeCard } from "../components/LargeCard";
import { MediumCard } from "../components/MediumCard";
import { SmallCard } from "../components/SmallCard";
import { MediumCardItem, SmallCardItem } from "./types";

// Removed ': NextPage' from 'const Home' below
const Home = ({
  exploreData,
  cardsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Main */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* Small Card API endpoint */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ location, distance, img }: SmallCardItem) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        {/* Medium Card API endpoint */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }: MediumCardItem) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        {/* Large Card */}
        <section>
          <LargeCard
            img={"https://links.papareact.com/4cj"}
            title={"The Greatest Outdoors"}
            description={"Wishlists curated by Airbnb."}
            buttonText={"Get Inspired"}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props: { exploreData, cardsData },
  };
};

export default Home;
