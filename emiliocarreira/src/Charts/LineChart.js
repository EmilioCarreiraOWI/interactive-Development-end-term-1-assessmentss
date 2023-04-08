import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v3/launches');
        setLaunches(response.data);
      } catch (error) {
        console.error('Error fetching launches:', error);
      }
    };
    fetchLaunches();
  }, []);

  const createChart = () => {
    // Prepare data for the line chart
    const labels = launches.map(launch => new Date(launch.launch_date_unix * 1000).toLocaleDateString());
    const data = {
      labels,
      datasets: [
        {
          label: 'Launches',
          data: launches.map(launch => launch.flight_number),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
        },
      ],
    };

    // Define options for the line chart
    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };

    // Create the line chart
    return (
      <Line data={data} options={options} />
    );
  };

  return (
    <div>
      <h1>SpaceX Launches Timeline Chart</h1>
      {launches.length ? createChart() : <p>Loading chart...</p>}
    </div>
  );
};

export default LineChart;