import NavBar from './components/NavBar'
import Match from './components/Match';
import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [demo, setDemo] = useState("2");
//   const [apiData, setApiData] = useState([
//     {
//     id: "",
//     season: "", 
//     city: "", 
//     date: "", 
//     match_type: "",
//     player_of_match: "",
//     venue: "", 
//     team1: "", 
//     team2: "", 
//     toss_winner: "",
//     toss_decision: "", 
//     winner: "",
//     result: "", 
//     result_margin: "",
//     target_runs: "",
//     target_overs: "", 
//     super_over: "", 
//     method: "",
//     umpire1: "", 
//     umpire2: ""
//   }
// ]);

  const [apiData, setApiData] = useState();


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/match/2021');
        console.log(response.data);
        setApiData(()=>
        
          response.data
        
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  },[])

  return (
    <>
    <NavBar></NavBar>

    <div className=''>
    {apiData && apiData.map(item => (
      <>
        <Match key={item.id} data={item}></Match>
        <br/>
      </>
      ))}

    {!apiData && <p>Loading...</p>}

    </div>
      
    </>
  )
}

export default App
