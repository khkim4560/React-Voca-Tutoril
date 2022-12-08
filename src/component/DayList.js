import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";//UseFetch 4번씩 실행됨

export default function DayList(){
    
    //const days = dummy.days;
    const [days,setDays] = useState([]);
    
    // const [count,setCount] = useState(0);
    //어떤상태값이 바뀌면 실행
    //두개 매개변수가 존재하고 첫번째는 함수,두번째는 배열
    //두번째 매개변수를 [] 빈 배열을 전달하면 최초에 한번만 실행됨
    //[count] count가 변경되면 실행됨
     useEffect(()=>{
         //console.log("Count Change");
         fetch(`http://localhost:3001/days`)
         .then(res =>{
             return res.json();
         })
         .then(data => {
             setDays(data);
         })
     }, []);

    //const days = UseFetch(`http://localhost:3001/days`);
    

   
    //const words = dummy.words;

    //console.log("dummy" ,dummy);
    //console.log("days" ,days);
    //console.log("words" ,words);
    return (
        <div>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.day}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>                        
                    </li>
                ))}              
            </ul>
            {/* <button onClick={()=>{ console.log("onClick"); setCount(count+1); }}>{count}</button>*/}
            
        </div>
    );

}