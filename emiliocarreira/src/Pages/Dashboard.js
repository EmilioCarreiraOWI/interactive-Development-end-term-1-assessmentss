import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { container, row } from 'react-bootstrap'
import { Radar } from "react-chartjs-2";




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

  const [launchesData, setLaunchesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => setLaunchesData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const successCount = launchesData.filter( //does not work for some reason
    (launch) => launch.launch_success === true
  ).length;
  const failCount = launchesData.filter(
    (launch) => launch.launch_success === false
  ).length;

  const data = {
    labels: ["Success", "Fail"],
    datasets: [
      {
        label: "Success and Fail Chart",
        data: [successCount, failCount],
        backgroundColor: ["rgba(75,192,192,0.4)", "rgba(255,99,132,0.4)"],
        borderColor: ["rgba(75,192,192,1)", "rgba(255,99,132,1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        beginAtZero: true,
      },
    },
  };

                

        //<a href='/'><img src={imageURL1} alt="Mission patch" class='w-50' /></a>    

    return(
    
        <>


        <div class='container m-3 mx-auto '>
            <div class='row'>
                <div class='col-md-8 my-3'>

                    <div class='card-body'id='cardBorder' style={{height: 'Auto'}}> 
                        <h5 class='card-title'>Chart: Don't want to display for some reason</h5>
                        <a href='/'><img src={imageURL1} alt="Mission patch" class='w-50' /></a>
                    </div>

                </div>

                <div class='col-md-4 '>
                    <div class='col-md-12'>
                  
                        <div class='card-body'id='cardBorder'>
                            <h5 class='card-title m-2'>Compare</h5>
                            <a href='/'><img src={imageURL1} alt="Mission patch" class='w-50' /></a>
                        </div>

                    </div>
                    <div class='col-md-12 my-2'>
                        <div class='card-body'id='cardBorder'>
                            <h5 class='card-title m-2'>Time-Line</h5>
                            <a href='/'><img src={imageURL2} alt="Mission patch" class='w-50' /></a>                            
                        </div>
                    </div>
                        
                    
                </div>
            </div>


            <div class='row'>
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
    
            
            

        </>
        
        
                
         
        
        
    );
}

export default Dashboard;