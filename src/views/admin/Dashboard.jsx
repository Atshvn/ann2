import React from "react";

// components

import CardLineChart from "../../components/cards/CardLineChart.jsx";
import CardBarChart from "../../components/cards/CardBarChart.jsx";
import CardPageVisits from "../../components/cards/CardPageVisits.jsx";
import CardSocialTraffic from "../../components/cards/CardSocialTraffic.jsx";
import Admin from "../../layouts/Admin.jsx";

export default function Dashboard() {
  return (
    <Admin>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </Admin>
  );
}
