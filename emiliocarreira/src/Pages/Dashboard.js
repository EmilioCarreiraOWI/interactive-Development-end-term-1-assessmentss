import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

function Dashboard() {

    const [apiData, setApiData] =useState([]);

    useEffect(() => {
        axios.get("https://api.spacexdata.com/v3/launches")
        .then((Response) => {
            console.log(Response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return(
        <div>
            
        </div>
    );
}

export default Dashboard;