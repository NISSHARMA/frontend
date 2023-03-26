import logo from './logo.svg';
import './App.css';

import Signup from "./Component/Signup"
import Login from "./Component/Login"

import {Route, Routes} from "react-router-dom"
import Notes from './Component/Notes';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Signup/>}/>
      <Route path="/login" element={ <Login/>}/>
      <Route path="/notes" element={ <Notes/>}/>    
    </Routes>
    </div>
  );
}

export default App;
