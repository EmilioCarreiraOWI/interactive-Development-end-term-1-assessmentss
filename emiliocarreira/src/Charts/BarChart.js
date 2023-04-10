import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
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

  // Extracting data for chart
  const yearsData = launchesData.reduce((acc, launch) => {
    const year = new Date(launch.launch_date_utc).getFullYear();
    if (!acc[year]) {
      acc[year] = 0;
    }
    acc[year]++;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(yearsData),
    datasets: [
      {
        label: 'Launches by Year',
        data: Object.values(yearsData),
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>SpaceX Launches Chart</h2>
      <Bar data={chartData} />
    </div>

  );
};

export default BarChart;