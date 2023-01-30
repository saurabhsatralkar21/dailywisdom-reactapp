import React, {useEffect, useState} from "react";

const MoreWisdom = () => {

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

        const moreWisdom = () => {
                setTimeout(()=>{
                    fetchData();
                    setLoading(false);
                }, 4000);
            }
    
    },[])


    return(
        <>
            <button className="customButton" onClick={moreWisdom}> I want more </button>
        </>
    )
}

export default MoreWisdom