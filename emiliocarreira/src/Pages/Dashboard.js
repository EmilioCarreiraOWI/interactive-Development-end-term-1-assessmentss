import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";




function Dashboard() {

    document.body.style = 'background: #282c34';

    const [apiData, setApiData] =useState([]);

    useEffect(() => {
        axios.get("http://api.cfl.ca/v1/games/players?key=TciUR7bNTu1xvfY5Iq9k6oyve8nt57OT") //API request in Aprove process
        .then((Response) => {
            console.log(Response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return(
    
        <>
        <div id='about' class='mx-3 p-2 my-4'>
            <img class='my-2' variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Logo_CFL_Luxembourg_%282022%29.svg/1280px-Logo_CFL_Luxembourg_%282022%29.svg.png" style={{ width: '30%', marginLeft: 'auto' }} alt='CFL About Logo' />
            <h5 class='col-md-7 m-auto my-2' style={{ marginLeft: '10%', marginRight: '10%', textAlign: 'left' }}>The Canadian Football League is a professional sports league in Canada. The CFL is the highest level of competition in Canadian football. The league consists of nine teams, each located in a city in Canada. They are divided into two divisions: four teams in the East Division and five teams in the West Division.</h5>

        </div>
        <div>
            <h2 class=""  style={{color: 'white',}}>Dashboard</h2>
            <div id='cards-align' class='row mx-4'>
                <div class='col-md-4 mx-auto my-4'>
                    <div>
                        <div class='card-body'id='cardBorder'> 
                        <a href='/'><img src='https://cf-images.us-east-1.prod.boltdns.net/v1/static/4401740954001/d398335f-54f4-44c3-ae3b-81ba39298168/dcb68382-c7c1-40f0-85d3-92a7a30c18b5/1920x1080/match/image.jpg' alt='Dashboar tab' class='w-100' /></a>
                        <h5 class='card-title'>Title</h5>
                        </div>
                    </div>
                </div>
                
                <div class='col-md-4 mx-auto my-4'>
                    <div>
                        <div class='card-body'id='cardBorder'> 
                        <a href='/Compare'><img src='https://nhfantasystorage.blob.core.windows.net/cflnewshub-storage/2022/12/CFL-Awards-109.png' alt='Dashboar tab' class='w-100' /></a>
                        <h5 class='card-title'>Compare</h5>
                        </div>
                    </div>
                </div>
                
                <div class='col-md-4 mx-auto my-4'>
                    <div>
                        <div class='card-body'id='cardBorder'> 
                        <a href='/Timeline'><img src='https://www.britishamericanfootball.org/wp-content/uploads/2022/03/combine.png' alt='Dashboar tab' class='w-100' /></a>
                        <h5 class='card-title'>Timeline</h5>
                        </div>
                    </div>
                </div>
                
                

            </div>
            
            
        </div>
        </>
        
        
                
         
        
        
    );
}

export default Dashboard;