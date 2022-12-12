import React from 'react';
import { useHistory } from 'react-router-dom'; // 설치한 패키지
import { useState ,useEffect, useRef} from "react";
import { useNavigate } from 'react-router-dom'; 


	function DeleteDay(props) {				
	
		const [days,setDays] = useState([]);
		const navigate = useNavigate();
		
		const dayReg = useRef(null);
				    		 
		useEffect(()=>{
			  fetch(`http://localhost:3001/days`)
			  .then(res =>{
				  return res.json();
			  })
			  .then(data => {
				  setDays(data);
			  })
		}, []);

		

		//삭제 버튼 클릭
		const toggleDeleteDay=(e)=>{						
			e.preventDefault();
			
			if(!window.confirm("삭제 하시겠습니가?")){
				return false;
			}

			fetch(`http://localhost:3001/days/${dayReg.current.value}`,{
					method : "DELETE"				
				}
			).then(res => {
				if(res.ok){
					alert("Day 삭제 완료 되었습니다.");
					navigate(`/`,false);//홈화면 이동
				}				
			});			
		}

		return (
			<form>
				<div className="input_area">
					<label>Delete Day</label>					
					<select ref={dayReg} >
					{
					days.map(day => (
                    	<option key={day.day} id={day.day} value={day.day}>{day.day}</option>
                	))
					}              						
					</select>
				</div>
				<button onClick={toggleDeleteDay}>삭제</button>
			</form>				
	  );
	}
	export default DeleteDay;