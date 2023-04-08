import React from "react";
import { Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import LaunchesCompareList1 from "../Charts/compare1";

function Compare() {

  document.body.style = 'background-color: #2D383A';
  

    return(
        <div class='container'>
            <div class='row'>

              
                {/* Compar 1 */}
                
                <div class="col-md-5 bg-dark text-white mx-auto my-3">
                  
                  <div class='p-3'>
                    <h1>Select Launch Here:</h1>
                    <LaunchesCompareList1 />
                  </div>         
                </div>   
                
                {/* Compar 2 */}
                
                <div class="col-md-5 bg-dark text-white mx-auto my-3">
                  
                  <div class='p-3'>
                  <h1>Select Launch Here:</h1>
                    <LaunchesCompareList1 />
                  </div>         
                </div>
               

     </div>
    </div>    
    );
}

export default Compare;