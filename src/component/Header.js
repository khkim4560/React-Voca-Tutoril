import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className="header">
            <h1>
            <Link to='/'>토익 영단어(고급)</Link>
                
            </h1>
            <div className="menu">                
                <Link to='/day/create_word' >  <button style={{backgroundColor: "#336666"}} >단어 추가</button></Link>
                <Link to='/day/create_day'  >  <button style={{backgroundColor: "#336666"}} > Day 추가</button></Link>                
                <Link to='/day/delete_day'  >  <button style={{backgroundColor: "#336666"}} > Day 삭제</button></Link>
            </div>
        </div>
    );
}