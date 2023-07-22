import { useState } from 'react';
import './App.css';
import Form from './Form';
import Gallery from './Gallery';
import Person from './Person';
import Toolbar from './Toolbar';

function App() {
  let data=100;
  const [score,setScore]=useState(0);
  
  function increment(){
    data+=200;
    console.log(data);
    setScore(score+1);
  }

  function incrementTriple(){
    setScore(score+3);
  }
  return (
    <div>
      {/* <Toolbar 
      onPlayMovie={()=>alert('Playing')}
      onUploadImage={()=>alert('Uploading successfully')}
      ></Toolbar> */}




      {/* <button onClick={()=>increment()}>+1</button>
      <button onClick={()=>{
        incrementTriple()
      }}>+3</button>

        <h1>Score: {score}</h1>
        <h1>Data: {data}</h1> */}


{/* <Form></Form> */}

{/* <Gallery></Gallery> */}


<Person></Person>
    </div>
  );
}

export default App;
