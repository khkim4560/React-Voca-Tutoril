import { useState } from "react";

	//function Hello(props) {
		function Hello(props) {
		 
	// const showNmae=()=>{
	// 	console.log("Mike");
	// }

	// const showAge=(age)=>{
	// 	console.log("age",age);
	// }

	// const showText=(e,txt)=>{
	// 	console.log("input",e.target.value);
	// 	console.log("txt",txt);
	// }

	// const [name, setName] = useState("Mika");
	// const [age, setAge] = useState(Number(props.age));	
	// let msg = age >=20 ?"성인입니다." : "미성년자 입니다.";

	// const buttonClicEvent =()=>{
	// 	let chngName = name==="Mika"  ?   "Jane"  :"Mika";
	// 	//setName(chngName);
	// 	setName( name==="Mika"  ?   "Jane"  :"Mika");
	// }

	// const buttonClicEventAgeIncrease =()=>{	
	// 	console.log("buttonClicEventAgeIncrease" , age)
	// 	const chngAge = age+1;
	// 	setAge(chngAge);
	// }
	
	// const  buttonClicEventAgeDecrease =()=>{
	// 	console.log("buttonClicEventAgeDecrease" , age)
	// 	const chngAge = age-1;
	// 	setAge(chngAge);
	// }
	
	return (
		    <div>
		        {/*HTML TAG 직접 스타일 작성 */}
                {/* <h1 style={{
                        color:"#F00",
                        borderRight:"12px solid #000",
                        marginBottom: "50px",
                        opacity: 1            
                }}>Hello</h1>
                <div className={styles.box}>App</div> */}

				{/* <h1>Hello</h1>
				<button onClick={showNmae}>Show name</button>
				<button onClick={()=>{
						showAge(30);
				}}>show age</button>
				<input type="text" 
				onChange={(e)=>{
					//console.log("input",e.target.value);
					//showText(e);
					const txt = e.target.value;
					showText(e,txt);
				}} ></input>
				*/}
				{
				
				/* <h1>state</h1>
				<h2>컴포넌트의속성값</h2>
				<h3>{name} ({age}세)</h3>
				<h3>{msg}</h3>
				
				<button onClick={buttonClicEvent}>Change</button>
				
				<button onClick={()=>{
					setName( name==="Mika"  ?   "Jane"  :"Mika");
				}}>Change2</button>
				
				<button onClick={buttonClicEventAgeIncrease}>Age Increase</button>
				
				<button onClick={buttonClicEventAgeDecrease}>Age decrease</button> */}


		    </div>
	  );
	}

	export default Hello;