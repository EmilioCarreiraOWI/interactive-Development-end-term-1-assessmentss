import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import axios from 'axios';

function RadarChart({APICall}) {

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
    // Prepare data for the doughnut chart
    const labels = ['Success', 'Failures'];
    const successCount = launches.filter(launch => launch.launch_success === true).length;
    const failureCount = launches.filter(launch => launch.launch_success === false).length;
    const data = [successCount, failureCount];

    // Define options for the doughnut chart
    const options = {
      responsive: true,
      maintainAspectRatio: false
    };

    // Create the doughnut chart
    return (
      <Doughnut data={{ labels, datasets: [{ data }] }} options={options} />
    );
  };

  return (
    <div>
      <h1>SpaceX Launches Doughnut Chart</h1>
      {launches.length ? createChart() : <p>Loading chart...</p>}
    </div>
  )
}

export default RadarChart;