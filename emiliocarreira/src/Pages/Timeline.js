import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function Timeline() {

  document.body.style = 'background-color: #2D383A';

  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => setLaunches(response.data))
      .catch((error) => console.log(error));
  }, []);

  const renderLaunch = (launch) => {
    const isSuccess = launch.launch_success;
    const launchDate = new Date(launch.launch_date_local).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    );
    const launchTime = new Date(launch.launch_date_local).toLocaleTimeString(
      "en-US",
      {
        hour: "numeric",
        minute: "numeric",
      }
    ); 

  return (
    

    <div
        key={launch.flight_number}
        className={`launch ${isSuccess ? "success" : "fail"}`}
      >
        <div className="bullet" />
        <div className="content" >

        <div class='container'>
          <div class='row'>
              <div class='col-md-5'>
                  <img style={{height: '250px'}} src={launch.links.mission_patch_small} alt={launch.mission_name} />
                </div>

                <div class='col-md-6'>
                  <h3 id="timelineH3" class='text-white text-left'>{launch.mission_name}</h3>
                  <p id="timelineP" class='text-muted'>
                    {launchDate} at {launchTime}
                  </p>

                  <p id="timelineP" class='text-white'>{launch.details}</p>
                </div>
                
                        
                </div>
                  
        </div>
        </div>
          

            
        
      </div>
    );
  }
  return <div className="timeline">{launches.map(renderLaunch)}</div>;
}

export default Timeline;