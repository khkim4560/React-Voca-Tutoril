import React from 'react';
import { useHistory } from 'react-router-dom'; // 설치한 패키지
import { useState ,useEffect, useRef} from "react";
import { useNavigate } from 'react-router-dom';


	function CreateDay(props) {				
	
		const [days,setDays] = useState([]);
		const navigate = useNavigate();
		const [saveState,setSaveState] = useState(true);
		const engReg = useRef(null);
		const korReg = useRef(null);
		const dayReg = useRef(null);
		
		//const history = useHistory();
		    		 
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

		

		//단어 저장 버튼 클릭
		const toggleCreateWord=(e)=>{						
			e.preventDefault();
			setSaveState(false);
			//console.log(engReg.current.value);
			//console.log(korReg.current.value);
			//console.log(dayReg.current.value);
			
			fetch(`http://localhost:3001/words/`,{
				method : "POST",
				headers : {
					"Content-Type" : "application/json",
				},
				body : JSON.stringify
				({
					eng : engReg.current.value,
					kor : korReg.current.value,
					day : dayReg.current.value,
					isDone : false,
				})
			})
			.then(res =>{
				if(res.ok){
					alert("생성이 완료 되었습니다.");
					navigate(`/day/${dayReg.current.value}`,false);					
					
				}
				setSaveState(true);
			});
		}

		return (
			<form>
				<div className="input_area">
					<label>Eng</label>					
					<input type="text" placeholder="computer" ref={engReg} />
				</div>
				<div className="input_area">
					<label>Kor</label>					
					<input type="text" placeholder="컴퓨터" ref={korReg}/>
				</div>
				<div className="input_area">
					<label>Day</label>					
					<select ref={dayReg} >
					{
					days.map(day => (
                    	<option key={day.day} id={day.day} value={day.day}>{day.day}</option>
                	))
					}              						
					</select>
				</div>
				
				{saveState ?<button onClick={toggleCreateWord}>저장</button>: <button >저장중...</button> }				
			</form>	
			
	  );
	}

	export default CreateDay;