import React from "react";
import { useEffect, useState } from "react";

const Wisdom = () => {

    const [advise, setAdvise] = useState("");


    useEffect(() => {
        const adviseEndpoint = "https://api.adviceslip.com/advice";
        
        const fetchData = async () => {
        try {
            const response = await fetch(adviseEndpoint);
            const adviseJsonFormat = await response.json(response);
            setAdvise(adviseJsonFormat.slip.advice)
        } catch(error){
            console.log(error);
        }
        }
        fetchData();

    },[])

    return(
        <div>
            <h1 className="heading"> Wisdom you take, young padawan! </h1>
            <div className='adviseBox'>
                <p>{advise}</p>
              </div>
        </div>
    )
}

export default Wisdom