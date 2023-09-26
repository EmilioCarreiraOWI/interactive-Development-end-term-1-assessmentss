// src/components/LineChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const LineChart = () => {
  const [launchData, setLaunchData] = useState([]);

  useEffect(() => {
    async function fetchLaunchData() {
      try {
        const response = await axios.get('https://api.spacexdata.com/v3/launches');
        setLaunchData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchLaunchData();
  }, []);

  // Extract the relevant data for the chart
  const launchYears = launchData.map((launch) => launch.launch_year);
  const launchCountByYear = Object.entries(
    launchYears.reduce((acc, year) => {
      acc[year] = (acc[year] || 0) + 1;
      return acc;
    }, {})
  );

  // Prepare data for the chart
  const chartData = {
    labels: launchCountByYear.map(([year]) => year),
    datasets: [
      {
        label: 'Launches by Year',
        data: launchCountByYear.map(([, count]) => count),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="line-chart">
      <h2>SpaceX Launches by Year</h2>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
