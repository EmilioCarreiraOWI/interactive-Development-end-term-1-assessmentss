import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LaunchesCompareList1 from "../componets/compare1";
import { Row, Container } from "react-bootstrap";
import BarChart from "../Charts/BarChart";
import RadarChart from "../Charts/RadarChart";
import PieChart from "../Charts/PieChart";



function Compare() {

  document.body.style = 'background-color: #2D383A';
  

    return(
        <div class='container'>
            <div class='row'>

                {/* Compar 1 */}
                
                <div class="col-md-5 bg-dark text-white mx-auto my-3">
                  
                  <div class='p-3'>
                    <h1 class='text-muted'>Select Launch Here:</h1>
                    <LaunchesCompareList1 />
                  </div>         
                </div>   
                
                {/* Compar 2 */}
                
                <div class="col-md-5 bg-dark text-white mx-auto my-3">
                  
                  <div class='p-3'>
                  <h1 class='text-muted'>Select Launch Here:</h1>
                    <LaunchesCompareList1 />
                  </div>         
                </div>
              
            </div>
            <div class='row'>
                <div class="col-md-12 bg-dark text-white mx-auto my-3">
                  
                  <div class='p-3'>
                    <h1 class='text-muted'>Charts:</h1>
                    {/* <RadarChart /> */}
                    {/* <BarChart /> */}
                    {/* <PieChart /> */}
                  </div>         
                </div> 
            </div>
    </div>    
    );
}

export default Compare;