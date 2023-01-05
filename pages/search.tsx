import { useRouter } from "next/router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MyMap } from "../components/Map";
import { format } from "date-fns";
import { InferGetStaticPropsType } from "next";
import { InfoCardItem } from "../types/types";
import { InfoCard } from "../components/InfoCard";

export const Search = ({
  searchResults,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  // The below allows us to get the search params from the router, and store them as variables using destructuring
  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays - {range} - for {numOfGuests} guest(s)
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults?.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                total,
              }: InfoCardItem) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        <section className="hidden md:inline-flex md:min-w-[40%] sticky top-[76px] h-[calc(100vh-76px)]">
          <MyMap searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export const getServerSideProps = async () => {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
};
