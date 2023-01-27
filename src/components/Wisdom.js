import React from "react";
import { useEffect, useState } from "react";
import CircleLoader from "react-spinners/ClipLoader";

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
        }, 3000);
    
    },[])

    return(
        <div>
            <h1 className="heading"> Wisdom you take, young padawan! </h1>
            <div className='adviseBox'>
                { loading ?
                
            <CircleLoader color={'#301E67'} loading={loading} size={100} aria-label="Loading Spinner" data-testid="loader" />
                : <p>{advise}</p>
                }
                
              </div>
        </div>
    )
}

export default Wisdom