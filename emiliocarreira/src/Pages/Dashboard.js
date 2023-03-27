import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";




function Dashboard() {

    document.body.style = 'background-color: #2D383A';

    const [apiData, setApiData] =useState([]);

    useEffect(() => {
        axios.get("https://api.spacexdata.com/v3/launches") //http://api.cfl.ca/v1/games/players?key=TciUR7bNTu1xvfY5Iq9k6oyve8nt57OT (API request denied)
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
            <img class='my-2' variant="top" src="https://www.vhv.rs/dpng/d/453-4533340_spacex-logo-png-white-spacex-black-logo-png.png" style={{ width: '30%', marginLeft: 'auto' }} alt='SpaceX About Logo' />
            <h5 class='col-md-7 m-auto my-2' style={{ marginLeft: '10%', marginRight: '10%', textAlign: 'left' }}>SpaceX is an American spacecraft manufacturer, launcher, and a satellite communications corporation headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the stated goal of reducing space transportation costs to enable the colonization of Mars.</h5>

        </div>
        <div>
            <h2 class=""  style={{color: 'white',}}>Dashboard</h2>
            <div id='cards-align' class='row mx-4'>
                <div class='col-md-4 mx-auto my-4'>
                    <div>
                        <div class='card-body'id='cardBorder'> 
                        <a href='/'><img src='https://wallpapersmug.com/download/1920x1080/8514e0/SpaceX-Falcon-Heavy-rocket-launch-smoke.jpg' alt='Dashboar tab' class='w-100' /></a>
                        <h5 class='card-title'>Title</h5>
                        </div>
                    </div>
                </div>
                
                <div class='col-md-4 mx-auto my-4'>
                    <div>
                        <div class='card-body'id='cardBorder'> 
                        <a href='/Compare'><img src='https://preview.redd.it/2k-hd-version-spacex-superheavy-launch-v0-5d90vkgbdhba1.png?width=1920&format=png&auto=webp&s=e7a2e4ab0098e0d076389ad05b597423f03ca3a5' alt='Dashboar tab' class='w-100' /></a>
                        <h5 class='card-title'>Compare</h5>
                        </div>
                    </div>
                </div>
                
                <div class='col-md-4 mx-auto my-4'>
                    <div>
                        <div class='card-body'id='cardBorder'> 
                        <a href='/Timeline'><img src='https://thumbs.dreamstime.com/b/falcon-rocket-company-space-landing-falcon-rocket-company-space-landing-ai-generative-271701379.jpg' alt='Dashboar tab' class='w-100' /></a>
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