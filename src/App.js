import Header from '../src/component/Header';
import Day from './component/Day';
import DayList from './component/DayList';
import EmptPage from './component/EmptPage';

import {BrowserRouter,Route,Routes} from'react-router-dom';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';


function App() {
  
  return (
    <BrowserRouter>          
      <div className="App">        
        
            <Header/>          
          
            <Routes>

            <Route exact path='/' element={<DayList/>} />

            <Route path='/day/:day' element={<Day/>} ></Route>

            <Route path='/day/create_word' element={<CreateWord/>} ></Route>
            
            <Route path='/day/create_day' element={<CreateDay/>} ></Route>

            <Route exact path="/*" element={<EmptPage/>} />
            
            </Routes>
          
    </div>
    </BrowserRouter>
  );
}

export default App;
