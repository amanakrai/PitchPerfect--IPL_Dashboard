import React from "react";
import { useState, useEffect } from "react";
const Match = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  let map = {};
  map["Chennai Super Kings"] = "/teamLogos/CSK.png";
  map["Rajasthan Royals"] = "/teamLogos/RR.png";
  map["Kings XI Punjab"] = "/teamLogos/K11P.png";
  map["Punjab Kings"] = "/teamLogos/PK.png";
  map["Delhi Daredevils"] = "/teamLogos/DC.png";
  map["Royal Challengers Bangalore"] = "/teamLogos/RCB.png";
  map["Mumbai Indians"] = "/teamLogos/MI.png";
  map["Deccan Chargers"] = "/teamLogos/DEC.png";
  map["Gujarat Titans"] = "/teamLogos/GT.png";
  map["Gujarat Lions"] = "/teamLogos/GL.png";
  map["Lucknow Super Giants"] = "/teamLogos/LSG.png";
  map["Sunrisers Hyderabad"] = "/teamLogos/SRH.png";
  map["Pune Warriors"] = "/teamLogos/PW.png";
  map["Rising Pune Supergiants"] = "/teamLogos/RPS.png";
  map["Rising Pune Supergiant"] = "/teamLogos/RPS.png";
  map["Delhi Capitals"] = "/teamLogos/DC.png";
  map["Kolkata Knight Riders"] = "/teamLogos/KKR.png";
  map["Royal Challengers Bengaluru"] = "/teamLogos/RCB.png";

  return (
    <>
    <div className="">

      
      <div
        onClick={toggleModal}
        className="mt-[20px]  border rounded-lg bg-white border-black max-w-xxl transition duration-300 ease-in-out hover:scale-95  p-2"
      >
        <h1 className=" text-center m-[-5px] font-bold">{data.match_type}</h1>
        <div className=" grid grid-cols-3 gap-[490px]">
          <img
            className="object-scale-down h-20 w-20 max-w-xs "
            src={map[data.team1]}
            alt="csk"
          />
          <div className="flex flex-col  ">
            <div className="text-center pt-[20%] font-bold">Vs</div>
            <div className="text-center ">{data.date}</div>
          </div>
          <img
            className="object-scale-down h-20 w-20 max-w-xs "
            src={map[data.team2]}
            alt="csk"
          />
        </div>
        <div className=" grid grid-cols-3 ">
          <h6 className=" text-start">{data.team1}</h6>
          <h1 className=" font-bold "></h1>
          <h1 className=" text-end">{data.team2}</h1>
        </div>
        <h1 className="text-center text-lime-600">
          {data.winner} won by {data.result_margin} {data.result}
        </h1>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl">
            <div className="">
              <h1 className=" text-center m-[-5px] font-bold">
                {data.match_type}
              </h1>
              <div className=" grid grid-cols-3 gap-[230px]">
                <img
                  className="object-scale-down h-20 w-20 max-w-xs"
                  src={map[data.team1]}
                  alt="csk"
                />
                <div className="flex flex-col  ">
                  <div className="text-center pt-[20%] font-bold">Vs</div>
                  <div className="text-center ">{data.date}</div>
                </div>
                <img
                  className="object-scale-down h-20 w-20 max-w-xs"
                  src={map[data.team2]}
                  alt="csk"
                />
              </div>
              <h1 className="text-center">{data.venue}</h1>
            </div>
            <div className="grid grid-cols-4 ">
              {data.toss_winner == data.team1 ? (
                <div className="text-left">
                  <div>Toss Winner</div>
                  {/* <img className="object-scale-down h-10 w-10 max-w-xs" src="teamLogos/coin.png" alt='csk'/> */}
                </div>
              ) : (
                <h1 className="text-center"></h1>
              )}
              <h1 className="text-center col-span-2 text-lime-600">
                {data.winner} won by {data.result_margin} {data.result}
              </h1>
              {data.toss_winner == data.team2 ? (
                <div className="text-right">
                  <div>Toss Winner</div>
                  {/* <img className="object-right object-scale-down  h-10 w-10 max-w-xs" src="teamLogos/coin.png" alt='csk'/> */}
                </div>
              ) : (
                <h1 className="text-center"></h1>
              )}
            </div>

            <p className="mt-6">
              In a thrilling encounter at {data.venue}, {data.city} on{" "}
              {data.date}, {data.team1} faced {data.team2} in a{" "}
              {data.match_type}. After winning the toss, {data.toss_winner}{" "}
              chose to {data.toss_decision}. {data.team2} set a target of{" "}
              <span className="underline underline-offset-1 font-semibold">
                {data.target_runs} runs in {data.target_overs} overs
              </span>
              . The player of the match was{" "}
              <span className="underline underline-offset-1 font-semibold">
                {data.player_of_match}
              </span>{" "}
              and {data.winner} emerged victorious by {data.result_margin}{" "}
              {data.result}. The match was officiated by{" "}
              <span className="underline underline-offset-1 font-semibold">
                umpires {data.umpire1} and {data.umpire2}
              </span>
              . Fans were treated to an exciting display of cricket until the
              last ball!
            </p>
            {/* The match concluded without a super over, utilizing the [method] for result determination, */}
            <button
              onClick={toggleModal}
              className="ml-[330px] mt-4 px-4 py-1 bg-red-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Match;
