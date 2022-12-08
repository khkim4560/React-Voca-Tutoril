import { Link } from "react-router-dom";
export default function EmptPage(){    
   
    return (
        <div>
            <h3>알수없는 페이지 입니다..</h3>               
            <Link to='/'>홈으로 돌아가기</Link>         
        </div>
    );

}