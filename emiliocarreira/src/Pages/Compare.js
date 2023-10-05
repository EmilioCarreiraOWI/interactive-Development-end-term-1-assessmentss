import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CompareNew from "../components/CompareNew";
import { Row, Col } from "react-bootstrap";

function Compare() {

  document.body.style = 'background-color: #2D383A';
  

    return(
        <div class='container'>
          <Row>
            <Col>
            <div id="informationDashboard" class='col-md-12 bg-dark text-light mb-3 mx-auto'>
                    <h1>SpaceX's Compare page</h1>
                    <p>Select any rocket on the dropdown list and compare the two rockets with the aditional information about each rockets.</p>
                </div>
            </Col>
          </Row>
            <div class='row'>

                {/* Compar 1 */}
                
                <div id='compareDev' class="col-md-5 bg-dark text-white mx-auto my-3">
                  
                  <div class='p-3'>
                    <h1 class='text-muted'>Select Launch Here:</h1>
                    <CompareNew />
                  </div>         
                </div>   
                
                {/* Compar 2 */}
                
                <div id='compareDev' class="col-md-5 bg-dark text-white mx-auto my-3">
                  
                  <div class='p-3'>
                  <h1 class='text-muted'>Select Launch Here:</h1>
                    <CompareNew />
                  </div>         
                </div>
              
            </div>
    </div>    
    );
}

export default Compare;