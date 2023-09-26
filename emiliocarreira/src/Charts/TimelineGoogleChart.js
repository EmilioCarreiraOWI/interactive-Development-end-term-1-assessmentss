import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';

function SpaceXLaunchesChart() {
  const [launchesData, setLaunchesData] = useState([]);

  useEffect(() => {
    // Fetch data from the SpaceX API
    axios.get('https://api.spacexdata.com/v3/launches')
      .then((response) => {
        // Process the data as needed
        const chartData = response.data.map((launch) => {
          return [new Date(launch.launch_date_utc), launch.flight_number];
        });

        // Set the chart data
        setLaunchesData(chartData);
      })
      .catch((error) => {
        console.error('Error fetching SpaceX data:', error);
      });
  }, []);

  return (
    <div>
      <h2>SpaceX Launches Line Chart</h2>
      <Chart
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Date', 'Flight Number'],
          ...launchesData
        ]}
        options={{
          title: 'SpaceX Launches Over Time',
          hAxis: {
            title: 'Date',
            format: 'MMM yyyy',
          },
          vAxis: {
            title: 'Flight Number',
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
}

export default SpaceXLaunchesChart;

