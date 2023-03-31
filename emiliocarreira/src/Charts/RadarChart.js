import React from 'react';
import { Radar } from "react-chartjs-2";
import { chart as chartJS } from 'chart.js/auto';

function RadarChart({APICall}) {
  return (
    <Radar data={APICall} />
  )
}

export default RadarChart;