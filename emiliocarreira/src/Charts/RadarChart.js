import React from 'react';
import { Radar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import axios from 'axios';

const RadarChart = () => {

  const [launchData, setLaunchData] = useState([]);

  useEffect(() => {
    const fetchLaunchData = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v3/launches');
        setLaunchData(response.data);
      } catch (error) {
        console.error('Failed to fetch SpaceX launches:', error);
      }
    };

    fetchLaunchData();
  }, []);

  const data = {
    labels: launchData.map(launch => launch.mission_name),
    datasets: [
      {
        label: 'Launch Success',
        data: launchData.map(launch => launch.launch_success ? 1 : 0),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <Radar data={data} />
    </div>
  )
}

export default RadarChart;