import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";




function Dashboard() {

    document.body.style = 'background-color: #2D383A';



    const [imageURL1, setImageURL1] = useState('');
    const [imageURL2, setImageURL2] = useState('');
    const [imageURL3, setImageURL3] = useState('');

        useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches')
            .then(response => {
                
                const firstLaunch = response.data[50];
                setImageURL1(firstLaunch.links.mission_patch);
            }
            )
            .catch(error => console.log(error));
        }, []);

        useEffect(() => {
            axios.get('https://api.spacexdata.com/v3/launches')
                .then(response => {
                    
                    const firstLaunch = response.data[23];
                    setImageURL2(firstLaunch.links.mission_patch);
                }
                )
                .catch(error => console.log(error));
            }, []);

            useEffect(() => {
                axios.get('https://api.spacexdata.com/v3/launches')
                    .then(response => {
                        
                        const firstLaunch = response.data[18];
                        setImageURL3(firstLaunch.links.mission_patch);
                    }
                    )
                    .catch(error => console.log(error));
                }, []);



    

    return(
    
        <>
        {/* About Page */}
        <div id='about' class='mx-3 p-2 my-4 float-left'>
            <img class='my-2 float-left col-md-6' variant="top" src="" style={{ width: '30%', marginLeft: 'auto' }} alt='SpaceX About Logo' />
            <h5 class='col-md-6 m-auto my-2 float-left' style={{ marginLeft: '10%', marginRight: '10%', textAlign: 'left' }}>SpaceX is an American spacecraft manufacturer, launcher, and a satellite communications corporation headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the stated goal of reducing space transportation costs to enable the colonization of Mars.</h5>
        </div>


        {/* Title*/}   
            <div>
            <h2 class=""  style={{color: 'white',}}>Dashboard</h2>
            <div id='cards-align' class='row mx-4'>


        {/* Title Page */}         
                <div class='col-md-4 mx-auto my-4'>
                    <div>
                        <div class='card-body'id='cardBorder'> 
                        <a href='/'><img src={imageURL1} alt="Mission patch" class='w-50' /></a>
                        <h5 class='card-title'>Title</h5>
                        </div>
                    </div>
                </div>
                
            {/* Compare Page */}
                <div class='col-md-4 mx-auto my-4'>
                    <div>
                        <div class='card-body'id='cardBorder'> 
                        <a href='/Compare'><img src={imageURL2} alt='Dashboar tab' class='w-50' /></a>
                        <h5 class='card-title'>Compare</h5>
                        </div>
                    </div>
                </div>
                
            {/* Timeline Page */}
                <div class='col-md-4 mx-auto my-4'>
                    <div>
                        <div class='card-body'id='cardBorder'> 
                        <a href='/Timeline'><img src={imageURL3} alt='Dashboar tab' class='w-50' /></a>
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