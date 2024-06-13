import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import View from './components/View';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Login/>}/>
     <Route path="/signup" element={<SignUp/>}/>
     <Route path="/add" element={<Add/>}/>
     <Route path="/view" element={<View/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
