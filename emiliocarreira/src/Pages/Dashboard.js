import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { container, row } from 'react-bootstrap'
import RadarChart from "../Charts/RadarChart";
import LineChart from "../Charts/LineChart";





function Dashboard() {

    document.body.style = 'background-color: #2D383A';



//Tab Images
    const [imageURL1, setImageURL1] = useState('');
    const [imageURL2, setImageURL2] = useState('');
    

    //Image 1
        useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches')
            .then(response => {
                
                const firstLaunch = response.data[50];
                setImageURL1(firstLaunch.links.mission_patch);
            }
            )
            .catch(error => console.log(error));
        }, []);

        //Image 2
        useEffect(() => {
            axios.get('https://api.spacexdata.com/v3/launches')
                .then(response => {
                    
                    const firstLaunch = response.data[23];
                    setImageURL2(firstLaunch.links.mission_patch);
                }
                )
                .catch(error => console.log(error));
            }, []);
       

            const [launch, setLaunch] = useState(null);

  useEffect(() => {
    const fetchRandomLaunch = async () => {
      try {
        const response = await axios.get("https://api.spacexdata.com/v3/launches");
        const launches = response.data;
        // Get a random launch from the list
        const randomIndex = Math.floor(Math.random() * launches.length);
        const randomLaunch = launches[randomIndex];
        setLaunch(randomLaunch);
      } catch (error) {
        console.error("Error fetching random launch:", error);
      }
    };
    fetchRandomLaunch();
  }, []);

    return(
    
        <>


    <div class='container m-3 mx-auto '>

        <div class='row'>
                <div class='col-md-12 bg-dark text-light mb-3 mx-auto'>
                    <h1>SpaceX</h1>
                    <p>SpaceX is a private spaceflight company that sends satellites and people to space, including NASA crews to the International Space Station (ISS). Founder Elon Musk is also creating and testing a Starship system for lunar landings and, he hopes, future crewed Mars missions.</p>
                </div>

            <div class='row'>

                <div class='col-md-8 bg-dark text-light'>
                    <div>
                        {launch ? (
                            <div>
                            <h1 class='my-2'>{launch.mission_name}</h1>
                            <p>{launch.details}</p>
                            <p>Launch date: {launch.launch_date_local}</p>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                        </div>
                    <div class='bg-dark' > 
                     
                    </div>

                </div>

                <div class='col-md-4'>
                    <div class='col-md-12 bg-dark text-light'>
                  
                            <h5 class='card-title'>Compare</h5>
                            <a href='/Compare'><img src={imageURL1} alt="Mission patch" class='w-50' /></a>
                    </div>

                    
                    <div class='col-md-12 bg-dark text-light p-2'>

                            <h5 class='card-title m-2'>Time-Line</h5>
                            <a href='/TimeLine'><img src={imageURL2} alt="Mission patch" class='w-50' /></a>                            
                    
                    </div>
                    
                        
                    
                </div>
            </div>
            <div class='row'>
                <div class='col-md-12 bg-dark text-light mt-3'>
                    <h2>How do SpaceX make money?</h2>
                    <p>
SpaceX makes money by charging both governmental and commercial customers to send goods into space. These goods include ISS supplies and infrastructure, but also people and satellites for various purposes.</p>
                    {/* <RadarChart /> */}
                    {/* <LineChart /> */}
                </div>
                
            </div>
 
        </div>
    </div>
    
            
            

        </>
        
        
                
         
        
        
    );
}

export default Dashboard;