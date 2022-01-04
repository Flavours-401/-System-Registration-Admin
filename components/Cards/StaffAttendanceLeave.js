import React, { useState, useEffect } from "react";
import axios from 'axios'
import Chart from "chart.js";


export default function StaffChart(props) {
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: ["leaves", "attends"],
        datasets: [
          {
            label: "leave",
            backgroundColor: "#ed64a6",
            borderColor: "#ed64a6",
            data: [props.leaves.length, props.attends.length],
            fill: false,
            barThickness: 8,
          },
          // {
          //   label: "attends",
          //   fill: false,
          //   backgroundColor: "#4c51bf",
          //   borderColor: "#4c51bf",
          //   data: [props.attends.length],
          //   barThickness: 8,
          // },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [5],
                borderDashOffset: [5],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [5],
                zeroLineBorderDashOffset: [5],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart-staff").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
        <div className="px-4 py-3 mb-0 bg-transparent rounded-t">
          <div className="flex flex-wrap items-center">
            <div className="relative flex-1 flex-grow w-full max-w-full">
              <h6 className="mb-1 text-xs font-semibold uppercase text-blueGray-400">
                statistics
              </h6>
              <h2 className="text-xl font-semibold text-blueGray-700">
                students Attendance VS Leaves
              </h2>
            </div>
          </div>
        </div>
        <div className="flex-auto p-4">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="bar-chart-staff"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
