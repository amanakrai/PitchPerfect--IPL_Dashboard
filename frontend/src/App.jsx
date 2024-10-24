import NavBar from "./components/NavBar";
import Match from "./components/Match";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

function App() {

     const year = useSelector((state)=>state.year.value)
   
     const team = useSelector((state)=>state.teamName.value)

     const [apiData, setApiData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/match/" + year
        );
        
        setApiData(() => response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [year]);

  return (
    <>
      <div className="flex flex-col ">
        <div>
          <NavBar></NavBar>
        </div>
        <div className="grid grid-cols-12 bg-scroll">
              {/* style={{backgroundImage: `url("/teamLogos/IPL.png")`}} */}
          <div className="col-span-1"></div>
          <div className="col-span-10">
            {apiData &&
              apiData.map((item) => (
                <>
                  <Match key={item.id} data={item}></Match>
                </>
              ))}

            {!apiData && (
              <div className="" disabled>
                <svg
                  className="animate-spin h-5 w-5 mr-3 ..."
                  viewBox="0 0 24 24"
                ></svg>
                Loading...
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
