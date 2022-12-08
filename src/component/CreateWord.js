import { useState } from "react";


	function CreateWord(props) {		
		
		//const word = props;
		//console.log("word" ,word );
		
		//state 사용변수 선언
		const [word, setWord] = useState(props);
		const [isShow, setIsShow] = useState(true);
		const [isDone, setIsDone] = useState(word.isDone);

		//뜻 보기
		const toggleShow=()=>{			
			const swtchYn =isShow;
			setIsShow((!swtchYn));
			//console.log(isShow);
		}

		//체크박스 체인지
		const toggleCheck=()=>{						
			//const swtchYn =isDone;
			//setIsDone((!swtchYn));
			//console.log(isDone);
			fetch(`http://localhost:3001/words/${word.id}`,{
				method : "PUT",
				headers : {
					"Content-Type" : "application/json",
				},
				body : JSON.stringify({...word,isDone : !isDone})
				}).then(res =>{
					if(res.ok){
						setIsDone(!isDone);
					}
			});
		}

		const toggleDelete=()=>{						
			
			if(!window.confirm("삭제 하시겠습니가?")){
				return false;
			}

			fetch(`http://localhost:3001/words/${word.id}`,{
					method : "DELETE"				
				}
			).then(res => {
				if(res.ok){
					setWord({id : 0 });					
				}				
			});
		}

		//id가 0인항목은 아래 리턴값을 실행하지 않고 null로 리턴
		if(word.id ===0){
			return null;
		}

		return (
				//1.직접 스타일 적용
				// <tr key={word.id} style={isDone ? {backgroundColor :  '#eee', color: '#ccc'} : {backgroundColor :  '', color: ''}}> 
				//2.클래스 적용(classNmae을 사용하기를 권고!!)
				<tr key={word.id} className={isDone ? "off" : "" }> 
				<td><input type="checkbox" checked={isDone} onChange={()=>{
					toggleCheck();
				}}></input></td>
				<td>{word.eng}</td>
				<td> { isShow ? word.kor : ""}</td> 
				<td><button  onClick={toggleShow} >뜻{ isShow ? "숨김": "보기"} </button>
				<button className="btn_del" onClick={toggleDelete}>삭제</button></td> 
			</tr>		
	  );
	}

	export default CreateWord;