import React, { Component,useState } from 'react'
import { sculptureList } from './data';


export default function Gallery() {
  const [index,setIndex]=useState(0);
  const [showMore,setShowMore]=useState(false);

  const hasNext=index<sculptureList.length-1;

function handleMoreClick(){
    setShowMore(!showMore);
}

function handleNextClick(){
    if(hasNext){
        setIndex(index+1);
    }
    else{
        setIndex(0);
    }
}
  let item=sculptureList[index];
  return (
    <div>
      <section>
        <button onClick={handleNextClick}>
            Next
        </button>
      </section>
      <h2>
        <i>{item.name}</i>
        by {item.artist}
      </h2>
      <h3>
        {index+1} of {sculptureList.length}
      </h3>
      <section>
        <button onClick={handleMoreClick}>
            {showMore?'Hide':'Show'} details
        </button>
        {showMore && <p>{item.description}</p>}
      </section>
      <img src={item.url} alt={item.alt}/>
    </div>
  )
}
