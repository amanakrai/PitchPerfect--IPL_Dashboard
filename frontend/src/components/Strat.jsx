import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";
const Strat = ({
  totalWins,
  winPct,
  tossWinPct,
  batFirstWinPct,
  fieldFirstPct,
  batFirstWin,
  fieldFirstWin,
}) => {

  const team = useSelector((state)=>state.teamName.value)
  
  const barChart = [
    ["Element", "Wins", { role: "style" }],
    ["Total Wins", totalWins, "green"],
    ["Bat First Wins", batFirstWin, "orange"],
    ["Field First Wins", fieldFirstWin, "skyblue"],
  ];

  const winLossPie = [
    ["Result", "%age"],
    ["Win %", winPct],
    ["Loss %", 100 - winPct],
  ];
  const tossWinLossPie = [
    ["Result", "%age"],
    ["Toss Win %", tossWinPct],
    ["Toss Loss %", 100 - tossWinPct],
  ];

  const options = {
    title: "Win/Loss Ratio",
  };
  const options2 = {
    title: "Toss Win/Loss Ratio",
  };

  return (
    <div>
      <div className="grid grid-cols-12 mb-[-20px] mt-[0px]">
      <div className="col-span-1"></div>
        <div className="col-span-2 ml-[-50px]">
          <Chart
            chartType="PieChart"
            data={winLossPie}
            options={options}
            width={"300px"}
            height={"300px"}
          />
          </div>
        <div className="col-span-2 ml-[-55px]">
        <Chart
          chartType="PieChart"
          data={tossWinLossPie}
          options={options2}
          width={"300px"}
          height={"300px"}
        />
        </div>
        <div className="col-span-3">
          <img src={`/teamLogos/${team}.png`} alt="" className="h-[300px] w-[300px]" />
        </div>
        <div className="col-span-3 ">
        <Chart
        chartType="ColumnChart"
        width="100%"
        height="100%"
        data={barChart}
      />
      </div>
      </div>
      
    </div>
  );
};

export default Strat;
