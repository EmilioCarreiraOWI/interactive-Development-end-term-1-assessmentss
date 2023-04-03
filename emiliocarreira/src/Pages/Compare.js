import React from "react";
import { Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Compare() {

    document.body.style = 'background-color: #2D383A';


    axios.get('https://api.spacexdata.com/v3/launches?rocket_name=Falcon%209')
    .then(response => {
      const launches1 = response.data;
      // handle data for first rocket here
    })
    .catch(error => {
      // handle error here
    });
  
  axios.get('https://api.spacexdata.com/v3/launches?rocket_name=Falcon%20Heavy')
    .then(response => {
      const launches2 = response.data;
      // handle data for second rocket here
    })
    .catch(error => {
      // handle error here
    });
  
  
  axios.get('https://api.spacexdata.com/v3/launches?rocket_name=Falcon%209')
    .then(response => {
      const launches1 = response.data;
      const launches1Success = launches1.filter(launch => launch.launch_success);
      
      axios.get('https://api.spacexdata.com/v3/launches?rocket_name=Falcon%20Heavy')
        .then(response => {
          const launches2 = response.data;
          const launches2Success = launches2.filter(launch => launch.launch_success);
  
          const falcon9SuccessCount = launches1Success.length;
          const falconHeavySuccessCount = launches2Success.length;
  
          if (falcon9SuccessCount > falconHeavySuccessCount) {
            console.log('Falcon 9 has had more successful launches');
          } else if (falcon9SuccessCount < falconHeavySuccessCount) {
            console.log('Falcon Heavy has had more successful launches');
          } else {
            console.log('Both rockets have had the same number of successful launches');
          }
        })
        .catch(error => {
          // handle error here
        });
    })
    .catch(error => {
      // handle error here
    });


    return(
        <div class='container'>
            <div class='row'>
                {/* Compar 1 */}
                <div class='col-sm-5 bg-dark text-white mx-auto my-3'>
                    <h1>compare one</h1>

                    <img src='' />
                </div>
                {/* Compar 2 */}
                <div class='col-sm-5 bg-dark text-white mx-auto my-3'>
                    <h1>compare two</h1>

                    <img src='' />

                    <p></p>
                </div>
            </div>

        </div>
    );
}

export default Compare;