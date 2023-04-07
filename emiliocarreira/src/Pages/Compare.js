import React from "react";
import { Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

function Compare() {

     document.body.style = 'background-color: #2D383A';

    const [compare1, setCompare1] = useState([]);
    const [compare2, setCompare2] = useState([]);


    axios.get('https://api.spacexdata.com/v3/launches?rocket_name=Falcon%209')
    .then(response => {
      const compare1 = response.data[23];
      // handle data for first rocket here
    })
    .catch(error => {
      // handle error here
    });
  
  axios.get('https://api.spacexdata.com/v3/launches?rocket_name=Falcon%20Heavy')
    .then(response => {
      const compare2 = response.data;
      // handle data for second rocket here
    })
    .catch(error => {
      // handle error here
    });


    // const [launchesData, setLaunchesData] = useState([]);

    // useEffect(() => {
    //   const fetchLaunchesData = async () => {
    //     try {
    //       const response = await axios.get("https://api.spacexdata.com/v3/launches");
    //       setLaunchesData(response.data);
    //     } catch (error) {
    //       console.error("Failed to fetch SpaceX launches data:", error);
    //     }
    //   };
  
    //   fetchLaunchesData();
    // }, []);
  
    // const getChartData = () => {
    //   // Extract relevant data from SpaceX launches data
    //   const years = launchesData.map((launch) => new Date(launch.launch_date_utc).getFullYear());
    //   const launchCounts = years.reduce((acc, year) => {
    //     if (year in acc) {
    //       acc[year]++;
    //     } else {
    //       acc[year] = 1;
    //     }
    //     return acc;
    //   }, {});
  
    //   // Convert data to chart.js format
    //   const chartData = {
    //     labels: Object.keys(launchCounts),
    //     datasets: [
    //       {
    //         label: "Number of Launches",
    //         data: Object.values(launchCounts),
    //         backgroundColor: "rgba(75,192,192,0.2)", // Bar color
    //         borderColor: "rgba(75,192,192,1)", // Bar border color
    //         borderWidth: 1,
    //       },
    //     ],
    //   };
  
    //   return chartData;
    // };

//ompare 1
const [launchesData1, setLaunchesData1] = useState([]);
  const [selectedRocket, setSelectedRocket] = useState("all");

  useEffect(() => {
    const fetchLaunchesData = async () => {
      try {
        const response = await axios.get("https://api.spacexdata.com/v3/launches");
        setLaunchesData1(response.data);
      } catch (error) {
        console.error("Failed to fetch SpaceX launches data:", error);
      }
    };

    fetchLaunchesData();
  }, []);

  const handleRocketChange = (event) => {
    setSelectedRocket(event.target.value);
  };

  const getChartData = () => {
    // Filter launches data based on selected rocket
    const filteredLaunchesData = selectedRocket === "all" ? launchesData1 : launchesData1.filter(launch => launch.rocket.rocket_id === selectedRocket);

    // Extract relevant data from filtered launches data
    const years = filteredLaunchesData.map((launch) => new Date(launch.launch_date_utc).getFullYear());
    const launchCounts = years.reduce((acc, year) => {
      if (year in acc) {
        acc[year]++;
      } else {
        acc[year] = 1;
      }
      return acc;
    }, {});

    // Convert data to chart.js format
    const chartData = {
      labels: Object.keys(launchCounts),
      datasets: [
        {
          label: "Number of Launches",
          data: Object.values(launchCounts),
          backgroundColor: "rgba(75,192,192,0.2)", // Bar color
          borderColor: "rgba(75,192,192,1)", // Bar border color
          borderWidth: 1,
        },
      ],
    };

    return chartData;
  };

  //compare 2
  const [launchesData2, setLaunchesData2] = useState([]);
  const [selectedRocket2, setSelectedRocket2] = useState(null);

  useEffect(() => {
    const fetchLaunchesData = async () => {
      try {
        const response = await axios.get("https://api.spacexdata.com/v3/launches");
        setLaunchesData2(response.data);
      } catch (error) {
        console.error("Failed to fetch SpaceX launches data:", error);
      }
    };

    fetchLaunchesData();
  }, []);

  const handleRocketSelect = (event) => {
    const selectedRocketId = event.target.value;
    const selectedRocketData = launchesData2.find((launch) => launch.rocket.rocket_id === selectedRocketId);
    setSelectedRocket2(selectedRocketData);
  };
  

    return(
        <div class='container'>
            <div class='row'>
                {/* Compar 1 */}
                <div class='col-sm-5 bg-dark text-white mx-auto my-3'>
                
                <div>
                   {/* <h2>SpaceX Launches Bar Chart</h2> */}
                    <label>
                    Select a Rocket:
                      <select value={selectedRocket} onChange={handleRocketChange}>
                        <option value="all">All Rockets</option>
                        {/* Render options for each unique rocket ID in launchesData */}
                          {Array.from(new Set(launchesData1.map(launch => launch.rocket.rocket_id))).map(rocketId => (
                        <option key={rocketId} value={rocketId}>{rocketId}</option>
                        ))}
                      </select>
                    </label>
      {/* <Bar data={getChartData()} options={{}} /> */}
    </div>
                  <p>{compare1.details}</p>

                    
                      {/* <Bar data={getChartData()} options={{}} /> */}
                    
                </div>


                {/* Compar 2 */}
                <div class='col-sm-5 bg-dark text-white mx-auto my-3'>
                    

                <div>
                  <h2>SpaceX Launches Dropdown</h2>
                  <select onChange={handleRocketSelect}>
                    <option value="">Select a rocket</option>
                      {launchesData2.map((launch) => (
                        <option key={launch.flight_number} value={launch.rocket.rocket_id}>
                          {launch.rocket.rocket_name}
                    </option>
                    ))}
                  </select>
                    {selectedRocket2 && (
        <div>
          <h3>Rocket Details</h3>
          <p>Rocket Name: {selectedRocket2.rocket.rocket_name}</p>
          <p>Launch Success: {selectedRocket2.launch_success ? "Success" : "Failure"}</p>
          <img class="col-sm-8" src={selectedRocket2.links.mission_patch_small} />
          <p>{selectedRocket2.details}</p>
        </div>
      )}
    </div>

                    

                    <p></p>
                </div>
            </div>

        </div>
    );
}

export default Compare;