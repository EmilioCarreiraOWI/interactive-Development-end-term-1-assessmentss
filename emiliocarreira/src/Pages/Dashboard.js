import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { container, row } from 'react-bootstrap'




function Dashboard() {

    document.body.style = 'background-color: #2D383A';



//Tab Images
    const [imageURL1, setImageURL1] = useState('');
    const [imageURL2, setImageURL2] = useState('');
    const [imageURL3, setImageURL3] = useState('');

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

            //Image 3
            useEffect(() => {
                axios.get('https://api.spacexdata.com/v3/launches')
                    .then(response => {
                        
                        const firstLaunch = response.data[18];
                        setImageURL3(firstLaunch.links.mission_patch);
                    }
                    )
                    .catch(error => console.log(error));
                }, []);

                const [launch, setLaunch] = useState(null);

  useEffect(() => {
    const getLaunchData = async () => {
      const response = await axios.get('https://api.spacexdata.com/v3/launches');
      const launches = response.data;
      const randomIndex = Math.floor(Math.random() * launches.length);
      const randomLaunch = launches[randomIndex];
      setLaunch(randomLaunch);
    };
    getLaunchData();
  }, []);

                

            

    return(
    
        <>

        {/* About Page */}
                <div id='about' class='col-md-10 mx-auto p-3 mt-4'>
                    <h5 class=' m-auto my-2 ' style={{ marginLeft: '10%', marginRight: '10%', }}>SpaceX is an American spacecraft manufacturer, launcher, and a satellite communications corporation headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the stated goal of reducing space transportation costs to enable the colonization of Mars.</h5>
                </div>
        
        
        {/* Title*/}   
            <div>
            <h2 class=""  style={{color: 'white',}}>Dashboard</h2>
            <div id='cards-align' class='row mx-4'>
        
        
        <div class='container m-3 mx-auto '>
            <div class='row '>
                <div class='col-md-4 my-3'>

                    {/* Title Page */}

                        <div class='card-body'id='cardBorder'> 
                        <a href='/'><img src={imageURL1} alt="Mission patch" class='w-50' /></a>
                        <h5 class='card-title'>Title</h5>
                    </div>
                </div>


                <div class='col-md-4 my-3'>

                    {/* Compare Page */}

                        <div class='card-body'id='cardBorder'>
                            <a href='/'><img src={imageURL2} alt="Mission patch" class='w-50' /></a>
                            <h5 class='card-title'>Compare</h5>
                        </div>
                </div>


                <div class='col-md-4 my-3'>

                    {/* Timeline Page */}
                        <div class='card-body'id='cardBorder'> 
                            <a href='/Timeline'><img src={imageURL3} alt='Dashboar tab' class='w-50' /></a>
                            <h5 class='card-title'>Timeline</h5>
                        </div>
                </div>


                <div class='col-md-4 my-3'>

                    {/* Timeline Page */}
                        <div class='card-body'id='cardBorder'> 
                            <a href='/Timeline'><img src={imageURL3} alt='Dashboar tab' class='w-50' /></a>
                            <h5 class='card-title'>Timeline</h5>
                        </div>
                </div>
                

                <div class='col-md-12 my-3'>

                    {/* Timeline Page */}
                    <div class='card-body'id='cardBorder'>
                        
                    <div>
                        {launch ? (
                            <div>
                            <div class="row">
                                <div class='col-md-6 p-3'>
                                   <h4>{launch.mission_name}</h4>
                                    <p>{launch.details}</p> 
                                </div>
                                
                                <div class='col-md-6 p-3'>
                                    <img style={{height: '250px'}} src={launch.links.mission_patch_small} alt={launch.mission_name} />
                                </div>
                                
                            </div>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
            
            
</div>
        </>
        
        
                
         
        
        
    );
}

export default Dashboard;