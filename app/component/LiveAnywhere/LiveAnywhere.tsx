import React from "react";
import LiveSlide from "./LiveSlid.tsx";
import { getLiveData } from "../../../utils/app.tsx";
import { IliveData } from "../../../interfaces/app.ts";
import MainHeading from "../MainHeading.tsx";

const LiveAnywhere = async () => {
  const liveData: IliveData[] = await getLiveData();

  return (
    <div className="py-6">
      <div className="container">
        <MainHeading title="Live Anywhere" />
        <LiveSlide liveData={liveData} />
      </div>
    </div>
  );
};

export default LiveAnywhere;
