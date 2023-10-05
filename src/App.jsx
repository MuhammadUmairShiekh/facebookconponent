import logo from './logo.svg';
import './App.css';
import Facebook from './Components/Facebook';

import {  useState ,useEffect } from 'react';

function App() {
const date = new Date
const newDate = `${date.getHours() + "h" + " ago" }`
  return (
    <div className="App">
      <header className="App-header">           
      
      <Facebook userName="Muhammad Umair"  tittle="Today had lunch at Kolachi" profilePic={["https://images.unsplash.com/photo-1507062916289-6af3d3e05386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" , "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" , "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" , "https://images.unsplash.com/photo-1578645635737-6a88e706e0f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" , "https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" ,"https://i.pinimg.com/736x/ed/7f/6b/ed7f6beb78b7fdd9193856fed36931e1.jpg"]}
       date={newDate} 
      />        
      
      
      
      
      
      </header>
    </div>
  );
}

export default App;
