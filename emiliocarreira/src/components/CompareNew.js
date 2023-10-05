import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';


function SpaceXLaunchesChart() {
  const [launches, setLaunches] = useState([]);
  const [selectedLaunch, setSelectedLaunch] = useState(null);

  useEffect(() => {
    // Fetch data from the SpaceX API
    axios.get('https://api.spacexdata.com/v3/launches')
      .then((response) => {
        setLaunches(response.data);
      })
      .catch((error) => {
        console.error('Error fetching SpaceX data:', error);
      });
  }, []);

  const handleLaunchSelect = (event) => {
    const selectedFlightNumber = event.target.value;
    const selectedLaunch = launches.find((launch) => launch.flight_number.toString() === selectedFlightNumber);

    setSelectedLaunch(selectedLaunch);
  };

  return (
    <div>
      <select id="compare1" onChange={handleLaunchSelect} className="col-sm-8 my-3 btn">
        <option value="">Select a launch</option>
        {launches.map((launch) => (
          <option key={launch.flight_number} value={launch.flight_number}>
            {launch.mission_name}
          </option>
        ))}
      </select>
      {selectedLaunch && (
        <div className="Container">
          <div className="Row">
            <div className="col-sm-12">
              <h2>Selected Launch: {selectedLaunch.mission_name}</h2>
              <p>Launch Success: {selectedLaunch.launch_success ? "Success" : "Failure"}</p>
              <p>Launch Year: {selectedLaunch.launch_year}</p>
            </div>
          </div>
          <div className="Row">
            <p className="col-sm-12">{selectedLaunch.details}</p>
            <img className="col-sm-6" src={selectedLaunch.links.mission_patch_small} alt={selectedLaunch.mission_name} />
          </div>

          <br />

          <div className="Row">
            <div className='col-sm-12'>
                <h1 class='text-muted'>Charts:</h1>
            </div>
            {/* Bar Chart */}
            <div className="col-sm-12">
              <Chart
                chartType="BarChart"
                data={[
                  ['Category', 'Value'],
                  ['Success', selectedLaunch.launch_success ? 1 : 0],
                  ['Failure', selectedLaunch.launch_success ? 0 : 1],
                ]}
                options={{
                  title: 'Launch Success',
                }}
              />
            </div>

            <br />

            {/* Pie Chart */}
            <div className="col-sm-12">
              <Chart
                chartType="PieChart"
                data={[
                  ['Category', 'Value'],
                  ['Success', selectedLaunch.launch_success ? 1 : 0],
                  ['Failure', selectedLaunch.launch_success ? 0 : 1],
                ]}
                options={{
                  title: 'Launch Success',
                }}
              />
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default SpaceXLaunchesChart;

