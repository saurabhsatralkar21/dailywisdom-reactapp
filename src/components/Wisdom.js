import React from "react";
import { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";

const Wisdom = () => {

    const [advise, setAdvise] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
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

        setTimeout(()=>{
            fetchData();
            setLoading(false);
        }, 4000);
    
    },[])

    
    return(
        <div>
            <h1 className="heading"> Wisdom you take, young padawan! </h1>
            <div className='adviseBox'>
                { loading ?
                
            <GridLoader
            color={'#D9ACF5'} loading={loading} size={15} aria-label="Loading Spinner" data-testid="loader" className="forStyle" />
                : <p>{advise}</p>
                }
                
              </div>
        </div>
    )
}

export default Wisdom