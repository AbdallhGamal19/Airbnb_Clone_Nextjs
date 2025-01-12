import Banner from "./component/Banner.tsx";
import Explor from "./component/Explor/Explore.tsx";
import GreatestOutdoors from "./component/GreatestOutdoors.tsx";
import LiveAnywhere from "./component/LiveAnywhere/LiveAnywhere.tsx";
import Header from "./component/Header/Header.tsx";
import Footer from "./component/Footer.tsx";
export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Explor />
      <LiveAnywhere />
      <GreatestOutdoors
        img="https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb"
        linkText="Get Inspired"
      />
      <Footer />
    </main>
  );
}
