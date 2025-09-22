import { useState } from 'react';
import './ReversiGrid.css'
import Reversi from "./Reversi";
import Button from './Button';

export default function ReversiGrid(){
  const [boxes, setBoxes] = useState(Array(25).fill(true));
  const toggleBox = (idx) => {
    setBoxes((prevBoxes) => {
      return prevBoxes.map((boxIsActive, i) => {
        if (i === idx) {
          return !boxIsActive;
        } else {
          return boxIsActive;
        }
      });
    });
  };
  
  const reset = () => {
    setBoxes(Array(25).fill(true));
  };
 
  return (
    <>
    <h1>Reversi</h1>
    <div className='ReversiGrid'>
      {boxes.map((value, i) => (
        <Reversi key={i} isActive={value} toggle={() => toggleBox(i)}/>
      ))}
      <Button clickFunc={reset} label="Reset" />
    </div>
    </>
  );
}
