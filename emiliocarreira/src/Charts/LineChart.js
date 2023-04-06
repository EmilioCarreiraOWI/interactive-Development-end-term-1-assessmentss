import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js';

const LineChart = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    // Fetch data from SpaceX API
    axios.get('https://api.spacexdata.com/v3/launches')
      .then(response => setLaunches(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Render line chart with fetched data
    const ctx = document.getElementById('lineChart').getContext('2d');

    const labels = launches.map(launch => launch.mission_name);
    const flightNumbers = launches.map(launch => launch.flight_number);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'SpaceX Launches',
          data: flightNumbers,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          pointRadius: 5,
          pointBackgroundColor: 'rgba(75, 192, 192, 1)',
          pointHoverRadius: 8,
          pointHitRadius: 10,
          pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Mission Name'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Flight Number'
            }
          }
        }
      }
    });
  }, [launches]);

  return (
    <div>
      <h1>SpaceX Launches Line Chart</h1>
      <canvas id="lineChart" width="800" height="400"></canvas>
    </div>
  );
};

export default LineChart;