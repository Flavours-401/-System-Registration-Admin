import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import StaffChart from "components/Cards/StaffAttendanceLeave.js";
import StudentChart from "components/Cards/StudentAttendanceLeave.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardPieChart from "components/Cards/CardPieChart.js";
// import CardPieChart1 from "components/Cards/CardPieChart1.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Dashboard() {
  const chartLabels = [
    'Red',
    'Blue',
    'Yellow'
  ]
  const datasets = [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
  const pieChartId = "pie-chart-1"
  const pieChartId1 = "pie-chart-2"
  const pieChartId3 = "pie-chart-3"
  const pieChartId4 = "pie-chart-4"

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-12 xl:w-full xl:mb-0">
          <CardLineChart />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-12 xl:w-6/12 xl:mb-0">
          <CardPieChart
            pieChartId={pieChartId}
            chartLabels={chartLabels}
            datasets={datasets}
          />
        </div>
        <div className="w-full px-4 xl:w-6/12">
          <CardPieChart
            pieChartId={pieChartId1}
            chartLabels={chartLabels}
            datasets={datasets}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-12 xl:w-6/12 xl:mb-0">
          <CardPieChart
            pieChartId={pieChartId3}
            chartLabels={chartLabels}
            datasets={datasets}
          />
        </div>
        <div className="w-full px-4 xl:w-6/12">
          <CardPieChart
            pieChartId={pieChartId4}
            chartLabels={chartLabels}
            datasets={datasets}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-12 xl:w-6/12 xl:mb-0">
          <StaffChart />
        </div>
        <div className="w-full px-4 xl:w-6/12">
          <StudentChart />
        </div>
      </div>
      
      <div className="flex flex-wrap mt-4">     {/* can be deleted if not used */}
        <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
          <CardPageVisits />
        </div>
        <div className="w-full px-4 xl:w-4/12">
          <CardSocialTraffic />
        </div>

      </div>
    </>
  );
}

Dashboard.layout = Admin;
