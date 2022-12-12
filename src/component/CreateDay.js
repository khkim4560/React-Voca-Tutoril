import React from 'react';
import { useState ,useEffect } from "react";
import { useNavigate } from 'react-router-dom';

	function CreateDay(props) {				
	
		const [days,setDays] = useState([]);
		const [saveDay,setSaveDay] = useState([]);
		const navigate = useNavigate();
		const [saveState,setSaveState] = useState(true);
		
		useEffect(()=>{
			//console.log("Count Change");
			fetch(`http://localhost:3001/days`)
			.then(res =>{
				return res.json();
			})
			.then(data => {
				
				setDays(data);

				//Day max value get
				let idData = data.map(function(v){
					return v.id;
				});

				const dayMax = Math.max.apply(null,idData);

				console.log("dayMax" ,dayMax);

				if(dayMax===null || dayMax===undefined || dayMax==='' || dayMax== -Infinity){
					setSaveDay(1);
				}else{
					setSaveDay((dayMax+1));
				}
         	})
		}, []);
		
		//
		const toggleCreateDay=(e)=>{						
			
			e.preventDefault();
			
			setSaveState(false);

			fetch(`http://localhost:3001/days/`,{
				method : "POST",
				headers : {
					"Content-Type" : "application/json",
				},
				body : JSON.stringify
				({
					id  : saveDay,
					day : saveDay
				})
			})
			.then(res =>{
				setSaveState(true);
				if(res.ok){
					alert(`${saveDay} Day 생성이 완료 되었습니다.`);
					navigate(`/day/${saveDay}`,false);
					navigate('/',false);					
				}
			});
		}

		return (
			<form>
				<div className="input_area">
					<label>Save Day : {saveDay} </label>										
				</div>				
				{saveState ?<button onClick={toggleCreateDay}>저장</button>: <button >저장중...</button> }				
			</form>
	  );
	}

	export default CreateDay;