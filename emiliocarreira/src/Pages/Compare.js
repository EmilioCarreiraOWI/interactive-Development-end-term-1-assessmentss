import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CompareNew from "../componets/CompareNew";

function Compare() {

  document.body.style = 'background-color: #2D383A';
  

    return(
        <div class='container'>
            <div class='row'>

                {/* Compar 1 */}
                
                <div class="col-md-5 bg-dark text-white mx-auto my-3">
                  
                  <div class='p-3'>
                    <h1 class='text-muted'>Select Launch Here:</h1>
                    <CompareNew />
                  </div>         
                </div>   
                
                {/* Compar 2 */}
                
                <div class="col-md-5 bg-dark text-white mx-auto my-3">
                  
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