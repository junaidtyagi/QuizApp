 import { useEffect, useState } from 'react';
import './App.css';
import { FirstPage } from './FirstPage';
import axios from 'axios';


function App() {
const [records , setRecords]= useState([]);
 
const fetchData = async()=>{
 const { data } = await axios.get('http://localhost:5004/quiz/getquestion');
 setRecords(data);
}


useEffect(()=>{
  fetchData();
},[]);


  return (
    <div className="App">
      <FirstPage  records ={records}/>
    </div>
  );
}

export default App;
