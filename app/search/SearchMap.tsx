"use client";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

import type { LatLngTuple } from "leaflet";

import { listingCardProps } from "../../interfaces/app.ts";

interface Iprops {
  searchResult: listingCardProps[];
}

const customIcon = L.icon({
  iconUrl:
    "https://cdn.pixabay.com/photo/2014/04/03/10/03/google-309740_1280.png", // Replace with the actual path to your image
  iconSize: [32, 40],
});

const SearchMap = ({ searchResult }: Iprops) => {
  const centerPosition: LatLngTuple = [
    searchResult[0]?.lat || 51.505, // Default to a safe value
    searchResult[0]?.long || -0.09,
  ];

  return (
    <MapContainer
      center={centerPosition}
      zoom={11}
      style={{
        height: "100%",
        width: "100%",
        outline: "none",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {searchResult.map((listen, index) => (
        <Marker
          key={index} // Use index if no unique id exists (better to use a unique id like `listen.id`)
          position={[listen.lat, listen.long]}
          icon={customIcon}
        >
          <Popup>{listen.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default SearchMap;
