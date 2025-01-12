import { format } from "date-fns";
import Footer from "../component/Footer.tsx";
import Header from "../component/Header/Header.tsx";
import Filters from "./Filters.tsx";
import { filters } from "../../data/app.ts";
import { getSearchResult } from "@/utils/app.tsx";
import { listingCardProps } from "../../interfaces/app.ts";
import ListingCard from "./ListenCard.tsx";
import SearshMap from "./SearchMap.tsx";
type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  guesNumber: string;
};

const SearchResult = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { location, startDate, endDate, guesNumber } = await searchParams;
  let formattedStartDate = "";
  let formattedEndDate = "";

  if (startDate && endDate) {
    formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  }
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  const searchResult: listingCardProps[] = await getSearchResult();
  return (
    <>
      <Header placeholder={`${location} | ${range} | ${guesNumber}`} />

      <main>
        <section className=" py-14">
          <div className="container xl:flex overflow-hidden">
            <div className="">
              <p className="text-xs">
                300+ Stays - (range) - for {guesNumber} guests
              </p>
              <h1 className="text-3xl font-semibold mt-2 mb-6">
                Stays in {location}
              </h1>
              <div className=" hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                <Filters filters={filters} />
              </div>
              <div className="xl:pr-10">
                {searchResult.map(
                  ({
                    description,
                    img,
                    location,
                    price,
                    star,
                    title,
                    total,
                  }) => (
                    <ListingCard
                      key={img}
                      description={description}
                      img={img}
                      location={location}
                      price={price}
                      star={star}
                      title={title}
                      total={total}
                    />
                  )
                )}
              </div>
            </div>
            <div className="  min-w-[600px] h-[600px] xl:h-auto ">
              <SearshMap searchResult={searchResult} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
//
export default SearchResult;
