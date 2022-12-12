import { useEffect, useState } from "react";
import { Link ,useParams} from "react-router-dom";
import UseFetch from "../hooks/UseFetch";

import Word from "./Word";


export default function Day(){    
        
    const {day} = useParams();   
    //const day = useParams().day;   
    //console.log("params.day" , params.day);        
    //const words = dummy.words;
    const [words,setWords] = useState([]);
    const [searchSts,setSearchSts] =useState(true);

     useEffect(()=>{
        setSearchSts(false); 
         //console.log("Count Change");
         fetch(`http://localhost:3001/words?day=${day}`)
         .then(res =>{
             return res.json();
         })
         .then(data => {
             setSearchSts(true);
             setWords(data);
         })
     }, [day]);
    //const words = UseFetch(`http://localhost:3001/words?day=${day}`);
    
    //const day   = params.day; 
    const prvDay = Number(day)-1;
    const nextDay = Number(day)+1;
    
    const wordList =words.filter((word) =>(
        word.day ==day
    ));
    
    return (
        <div>
            <h3>Day {day}</h3>
            <div style={{display:"block", textAlign:"center"}}>
                {
                    prvDay > 0 ? (<button onClick={()=>{console.log("이전버튼 클릭")}} ><Link to={`/day/${prvDay}`}>이전</Link></button>) : ("")            
                }

             <button style={{marginLeft:10,marginBottom:10}} onClick={()=>{console.log("다음버튼 클릭")}} ><Link to={`/day/${nextDay}`}>다음</Link></button>
            </div> 
            <table>               
                <tbody>
                {searchSts ? wordList.map(word => (
                    
                 <Word key={word.id} day={word.day}  eng={word.eng} kor={word.kor}  id={word.id} isDone={word.isDone}>
                 </Word>   
                    
                )) : "Loading..."}    
                </tbody>                          
            </table>           
        </div>
    );

}