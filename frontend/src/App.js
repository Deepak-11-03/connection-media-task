import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/HeaderComponent/Header';
import Signup from './Components/HeaderComponent/Signup';
import Login from './Components/HeaderComponent/Login';
import JobPost from './Components/JobPost';
import Protected from './Components/Protected';
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Protected Component={Dashboard}/>} />
        <Route exact path="/post-job" element={<Protected Component={JobPost}/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
