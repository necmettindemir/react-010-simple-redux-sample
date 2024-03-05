import logo from './logo.svg';
import './App.css';



import { Suspense }     from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Page1Balance } from 'pages/Page1Balance';
import { Page2Balance } from 'pages/Page2Balance';
import { Page3Todos }   from 'pages/Page3Todos';
import { Home }         from 'pages/Home';
import { Page4Todos }   from 'pages/Page4Todos';

function App() {
  return (
    <div className="App">
                  <Suspense fallback={<div className="container">Loading...</div>}>              
                    <Routes>       
                        <Route path="/" element={<Navigate to="/pages/home" />} />                 
                        <Route path="/pages/home" element={<Home />} />          
                        <Route path="/pages/page1" element={<Page1Balance />} />          
                        <Route path="/pages/page2" element={<Page2Balance />} />          
                        <Route path="/pages/page3" element={<Page3Todos />} />          
                        <Route path="/pages/page4" element={<Page4Todos />} />       
                    </Routes>
                </Suspense>   
    </div>
  );
}

export default App;
