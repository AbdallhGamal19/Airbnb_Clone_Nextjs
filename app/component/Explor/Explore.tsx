import { IexploreData } from "../../../interfaces/app.ts";
import { getExplore } from "../../../utils/app.tsx";
import MainHeading from "../MainHeading.tsx";
import ExploreCard from "./ExploreCard.tsx";

const Explor = async () => {
  const exploreData: IexploreData[] = await getExplore();

  return (
    <section className="py-6">
      <div className="  container">
        <MainHeading title="Explore Nearby" />
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
          {exploreData.map(({ distance, img, location }) => (
            <ExploreCard
              key={img}
              img={img}
              distance={distance}
              location={location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explor;
