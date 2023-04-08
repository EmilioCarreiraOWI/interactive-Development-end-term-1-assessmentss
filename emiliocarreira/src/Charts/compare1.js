import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container,Row} from "react-bootstrap";

const LaunchesCompareList1 = () => {
  const [launches, setLaunches] = useState([]);
  const [selectedLaunch, setSelectedLaunch] = useState(null);

  useEffect(() => {
    // Fetch data from the SpaceX API using Axios
    axios.get("https://api.spacexdata.com/v3/launches")
      .then(response => {
        setLaunches(response.data);
      })
      .catch(error => {
        console.error("Error fetching launches:", error);
      });
  }, []);

  const handleLaunchSelect = (event) => {
    const selectedLaunchId = event.target.value;
    const selectedLaunch = launches.find(launch => launch.flight_number === Number(selectedLaunchId));
    setSelectedLaunch(selectedLaunch);
  };

  return (
    <div>
      
      <select onChange={handleLaunchSelect} class='col-sm-8 my-3'>
        <option value="">Select a launch</option>
        {launches.map(launch => (
          <option key={launch.flight_number} value={launch.flight_number}>
            {launch.mission_name}
          </option>
        ))}
      </select>
      {selectedLaunch && (
        <div class='Container'>
            <div class='Row'>

                <div class='col-sm-12'>
                        <h2>Selected Launch: {selectedLaunch.mission_name}</h2>
                        <p>Launch Success: {selectedLaunch.launch_success ? "Success" : "Failure"}</p>
                        <p>Launch Year: {selectedLaunch.launch_year}</p>  
                    </div>

            </div>
            <div class='Row'>
                <p class='col-sm-12'>{selectedLaunch.details}</p> 
                    <img  class='col-sm-6' src={selectedLaunch.links.mission_patch_small} alt={selectedLaunch.mission_name} />
                
                    
                
            </div>

                    
            

                    
          
        </div>
      )}
    </div>
  );
};

export default LaunchesCompareList1;