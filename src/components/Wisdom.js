import React from "react";
import { useEffect, useState } from "react";

const Wisdom = () => {

    const [advice, setAdvice] = useState("");


    useEffect(() => {
        const adviceEndpoint = "https://api.adviceslip.com/advice";
        
        const fetchData = async () => {
        try {
            const response = await fetch(adviceEndpoint);
            const adviseJsonFormat = await response.json(response);
            setAdvice(adviseJsonFormat.slip.advice)
        } catch(error){
            console.log(error);
        }
        }
        fetchData();

    })

    return(
        <div>
            <h1 className="heading"> Wisdom here </h1>
            <div className="adviceTexts">
                {advice}
            </div>
        </div>
    )
}

export default Wisdom