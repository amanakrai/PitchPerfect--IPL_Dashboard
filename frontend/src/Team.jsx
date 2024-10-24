
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Match from "./components/Match";
import Strat from "./components/Strat";

const Team = () => {
  
  const year = useSelector((state)=>state.year.value)
  const teamName = useSelector((state)=>state.teamName.value)

  const [teamMatches, setTeamMatches] = useState([]);
  const [teamStrats, setTeamStrats] = useState();


  let map = {};
  map["CSK"] ="Chennai Super Kings";
  map["RR"] ="Rajasthan Royals" ;
  map["K11P"] ="Kings XI Punjab";
  map["PK"] ="Punjab Kings";
  map["DC"] ="Delhi Daredevils";
  map["RCB"] ="Royal Challengers Bangalore";
  map["MI"] ="Mumbai Indians";
  map["DEC"] ="Deccan Chargers";
  map["GT"] ="Gujarat Titans";
  map["GL"] ="Gujarat Lions";
  map["LSG"] ="Lucknow Super Giants";
  map["SRH"] ="Sunrisers Hyderabad";
  map["PW"] ="Pune Warriors";
  map["RPS"] ="Rising Pune Supergiant";
  map["DC"] ="Delhi Capitals";
  map["KKR"] ="Kolkata Knight Riders";
  map["RCB"] ="Royal Challengers Bengaluru";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/match/" + map[teamName] + "/" +year
        );
        setTeamMatches(() => response.data);

        const statresponse = await axios.get("http://localhost:8080/api/match/strats/" + map[teamName] + "/" +year)
        console.log("STatsss = "+JSON.stringify(statresponse.data))
        console.log("STatsss = "+JSON.stringify(statresponse.data["teamName"]))
        setTeamStrats(()=>statresponse.data)
  
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
     fetchData();
  }, [teamName,year]);


  return (
    <>
    <div>
          <NavBar></NavBar>
    </div>
    <div className="">
    <div>
    {teamStrats &&          <Strat 
                     totalMatches={teamStrats["totalMatches"]}
                     totalWins={teamStrats["totalWins"]}
                     winPct={teamStrats["winPct"]}
                     tossWinPct={teamStrats["tossWinPct"]}
                     batFirstWinPct={teamStrats["batFirstWinPct"]}
                     fieldFirstPct={teamStrats["fieldFirstPct"]}
                     batFirstWin={teamStrats["batFirstWin"]}
                     fieldFirstWin={teamStrats["fieldFirstWin"]}
              ></Strat> 
    }
    </div>  
    <div className="grid grid-cols-12 bg-scroll ">
    <div className="col-span-1"></div>
    <div className="col-span-10">
    {teamMatches &&
              teamMatches.map((item) => (
                <>
                  <Match key={item.id} data={item}></Match>
                </>
              ))}
 
    </div>
    </div>
    </div>
    </>
  )
}

export default Team
