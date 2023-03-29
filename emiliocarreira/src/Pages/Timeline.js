import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Timeline() {

    document.body.style = 'background-color: #2D383A';

  const [launches, setLaunches] = useState([]); //create a useState, to get the naming for the variables

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v3/launches') //axios get function for the API
      .then(response => setLaunches(response.data))
      .catch(error => console.log(error)); //if the data do not responed, this function catches the error
  }, []);

  return (
    <div className="timeline"> {/*diffrant class name for the div 'timeline' */}
      {launches.map(launch => (
        <div key={launch.flight_number} className="event">
          <h3>{launch.mission_name}</h3>
          <p>{launch.launch_date_local}</p>
        </div>
      ))}
    </div>
  );
}

export default Timeline;