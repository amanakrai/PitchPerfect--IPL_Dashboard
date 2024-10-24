import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTeam } from "../Store/TeamSlice";
import { toggleYear } from "../Store/YearSlice";
import { Link } from "react-router-dom";
const NavBar = () => {
  const year = useSelector((state) => state.year.value);
  const teamName = useSelector((state) => state.teamName.value);
  const dispatch = useDispatch();

  const yearList = [
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
  ];

  const teamLogogs = [
    "CSK",
    "DC",
    "GT",
    "KKR",
    "LSG",
    "MI",
    "PK",
    "PW",
    "RCB",
    "RR",
    "SRH",
  ];

  //  function handleYearChange(data) {
  //     handleYear(data);
  //   }
  return (
    <div className=" bg-white border-b-2 border-black ">
      <div className="py-3 px-3 bg-white h-25 flex flex-row border-b-2 border-black  bg-slate-300">
        <Link to={`/team/${year}`} className=" text-black ml-4 mr-12">
          <img
            className="object-scale-down h-20 w-20 max-w-xs transition duration-300 ease-in-out hover:scale-90 "
            src="/teamLogos/PP.png"
            alt="csk"
          />
        </Link>

        <div className="grid grid-cols-11 gap-10">
          {teamLogogs.map((t) => (
            <>
              <Link
                className=" relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
                to={`/team/${year}/${t}`}
                onClick={() => dispatch(toggleTeam(t))}
              >
                <img
                  className="object-scale-down h-20 w-20 max-w-xs transition duration-300 ease-in-out hover:scale-90"
                  src={`/teamLogos/${t}.png`}
                  alt={t}
                />
              </Link>
            </>
          ))}
        </div>
      </div>
      <div>
        <div className="flex bg-slate-300">
          {yearList.map((y) => (
            <>
              <div className="m-auto flex " >
                <button
                 
                  onClick={() => dispatch(toggleYear(y))}
                  className="transition duration-300 ease-in-out hover:scale-90 font-semibold select:bg-slate-600 "
                 
                >
                  {y}
                </button>
                {year==y && <div className="font-extrabold">*</div>}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
