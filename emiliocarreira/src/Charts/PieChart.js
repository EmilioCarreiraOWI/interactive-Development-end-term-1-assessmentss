import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const [launchesData, setLaunchesData] = useState([]);

  useEffect(() => {
    // Fetch data from SpaceX API using Axios
    axios.get('https://api.spacexdata.com/v3/launches')
      .then(response => {
        // Extract relevant data from API response
        const launches = response.data.map(launch => ({
          missionName: launch.mission_name,
          rocketName: launch.rocket.rocket_name,
        }));
        setLaunchesData(launches);
      })
      .catch(error => {
        console.error('Failed to fetch data from SpaceX API:', error);
      });
  }, []);

  // Prepare data for Pie chart
  const chartData = {
    labels: launchesData.map(launch => launch.missionName),
    datasets: [
      {
        data: launchesData.map(launch => 1),
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          // Add more background colors as needed
        ],
      },
    ],
  };

  return (
    <div>
      <h1>Launches Pie Chart</h1>
      <Pie data={chartData} />
    </div>
  )
}

export default PieChart