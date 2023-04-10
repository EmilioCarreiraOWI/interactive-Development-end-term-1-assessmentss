import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const TimelineChart = () => {
    const [launchesData, setLaunchesData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://api.spacexdata.com/v3/launches');
          setLaunchesData(response.data);
        } catch (error) {
          console.error('Error fetching SpaceX launches data:', error);
        }
      };
      fetchData();
    }, []);
  
    // Extracting data for the Line chart
    const chartData = {
      labels: launchesData.map(launch => launch.launch_year), // X-axis labels
      datasets: [
        {
          label: 'Launches',
          data: launchesData.map(launch => launch.launch_success), // Y-axis data
          backgroundColor: 'rgba(75,192,192,0.2)', // Chart background color
          borderColor: 'rgba(75,192,192,1)', // Chart border color
          borderWidth: 2, // Chart border width
        }
      ]
    };
  return (
    <div>
      <h1>SpaceX Launches Chart</h1>
      <Line data={chartData} /> {/* Render Line chart with extracted data */}
    </div>
  )
}

export default TimelineChart