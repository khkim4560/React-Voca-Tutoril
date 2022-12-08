import { useEffect, useState } from "react";

export default function UseFetch(url){
        
    const [data,setData] = useState([]);
    
    useEffect(()=>{
        fetch(url)
        .then(res =>{
            return res.json();
        })
        .then(callData => {
            setData(callData);            
        });

    }, [url]);
    console.log(data);
    return data;    
}