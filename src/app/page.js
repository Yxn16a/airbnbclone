import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Head from "next/head";
import SmallCard from "../../components/SmallCard";
import MediumCard from "../../components/MediumCard";
import LargeCard from "../../components/LargeCard";
import Footer from "../../components/Footer";

async function getExpleData() {
  try {
    const res = await fetch("https://www.jsonkeeper.com/b/4G1G", {
      cache: "force-cache",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function getAnyWhereData() {
  try {
    const res = await fetch("https://www.jsonkeeper.com/b/VHHT", {
      cache: "force-cache",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export default async function Home() {
  const data = await getExpleData();
  const anyWhereData = await getAnyWhereData();
  return (
    <div>
      <Head>
        <title>hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      {/* max-w is used to set the  */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold">Explore Nearby</h2>
          {/* pull data from server we will do server side rendering */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data &&
              data.map(({ img, distance, location }) => (
                <SmallCard
                  key={img}
                  img={img}
                  distance={distance}
                  location={location}
                />
              ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          {/* overflowscroll helse for what is missing  */}
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {anyWhereData &&
              anyWhereData.map(({ img, title }) => (
                <MediumCard key={img} img={img} title={title} />
              ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="the greatest outdoors"
          description="Wish list curated by Airbnb"
          buttonText="Get inspired"
        />
      </main>
    
        <Footer/> 
   
     
    </div>
  );
}
