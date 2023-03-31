import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function LogoImg() {

  const [launches, setLaunches] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);

    useEffect(() => {
      axios.get('https://api.spacexdata.com/v3/launches')
        .then(response => setLaunches(response.data))
        .catch(error => console.log(error));
}, []);

    useEffect(() => {
      setRandomIndex(Math.floor(Math.random() * launches.length));
}, [launches]);
  return (
    <img src={launches[randomIndex]?.links.mission_patch_small} alt="React Logo" id="logoImg"/>
  )
}

export default LogoImg