import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Timeline() {

    document.body.style = 'background-color: #2D383A';

  const [launches, setLaunches] = useState([]); //create a useState, to get the naming for the variables

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => setLaunches(response.data))
      .catch((error) => console.log(error));
  }, []);

  // const formatDataForTimeline = () => {
  //   const timelineItems = [];
  
  //   launches.forEach((launch) => {
  //     const { mission_name, launch_date_utc, details } = launch;
  //     const date = new Date(launch_date_utc);
  
  //     timelineItems.push(
  //       <li key={mission_name}>
  //         <div className="timeline-badge"></div>
  //         <div className="timeline-panel">
  //           <div className="timeline-heading">
  //             <h4 className="timeline-title">{mission_name}</h4>
  //             <p>
  //               <small className="text-muted">
  //                 <i className="glyphicon glyphicon-time"></i>{" "}
  //                 {date.toDateString()}
  //               </small>
  //             </p>
  //           </div>
  //           <div className="timeline-body">
  //             <p>{details}</p>
  //           </div>
  //         </div>
  //       </li>
  //     );
  //   });
  
    
  //   return timelineItems;
  // };

  const formatDataForTimeline = () => {
    const items = [];
  
    launches.forEach((launch) => {
      const { mission_name, launch_date_utc, details } = launch;
  
      items.push({
        date: new Date(launch_date_utc).toLocaleDateString(),
        title: mission_name,
        content: details || "No details available.",
      });
    });
  
    return items;
  };

  

  return (

  //   <div className="container">
  //   <ul className="timeline">{formatDataForTimeline()}</ul>
  // </div>
  <Container>
    <Row>
      <Col xs={12}>
        <div className="timeline">
          {formatDataForTimeline().map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-item-content">
                <h3 className="timeline-item-title">{item.title}</h3>
                <p className="timeline-item-date">{item.date}</p>
                <p className="timeline-item-description">{item.content}</p>
              </div>
              <div className="timeline-item-divider" />
            </div>
          ))}
        </div>
      </Col>
    </Row>
  </Container>
    );

}

export default Timeline;