import React,{useState} from 'react'
const randomColor = require('randomcolor'); // import the script
const Box = ({ index, }) => {

  let numOfRows = 3;
  let numOfCols = 6;
  
  const isValidLeft = (index,newIndex) => {
    let row = Math.floor(index / numOfCols);
    let col = index % numOfCols;
    let newRow = Math.floor(newIndex / numOfCols);
    let newCol = newIndex % numOfCols;
    if (row == newRow && col - 1 == newCol)
      return true;
    else
      return false;
  }
  const isValidRight = (index,newIndex) => {
    let row = Math.floor(index / numOfCols);
    let col = index % numOfCols;
    let newRow = Math.floor(newIndex / numOfCols);
    let newCol = newIndex % numOfCols;
    if (row == newRow && col + 1 == newCol)
      return true;
    else
      return false;
  }
  const isValidTop = (index,newIndex) => {
    let row = Math.floor(index / numOfCols);//1
    let col = index % numOfCols;//2
    let newRow = Math.floor(newIndex / numOfCols);//0
    let newCol = newIndex % numOfCols;//2
    console.log(row,col,newRow,newCol);
    if (row -1 === newRow && col === newCol && newRow>=0)
      return true;
    else
      return false;
  }
  const isValidBottom = (index,newIndex) => {
    let row = Math.floor(index / numOfCols);
    let col = index % numOfCols;
    let newRow = Math.floor(newIndex / numOfCols);
    let newCol = newIndex % numOfCols;
    if (row +1 == newRow && col == newCol && newRow<numOfRows)
      return true;
    else
      return false;
  }

  const getRandomNeighbour = (index) => {
    let top = index - numOfCols;
    let bottom = index + numOfCols;
    let left = index - 1;
    let right = index + 1;
    let directions = [];
    if (isValidTop(index,top))
      directions.push(top);
    if (isValidBottom(index,bottom))
      directions.push(bottom);
    if (isValidLeft(index,left))
      directions.push(left);
    if (isValidRight(index,right))
      directions.push(right);
    console.log(directions);
    let randomIndex = Math.floor(Math.random() * directions.length);
    return directions[randomIndex];
  }
  const [newColor, setnewColor] = useState('');
  const handleBoxClick = () => {
    let color = randomColor();
    setnewColor(color);
    document.getElementById(getRandomNeighbour(index)).style.backgroundColor = randomColor();
  }
  return (
    <div className="box" id={index} onClick={handleBoxClick} style={{backgroundColor:newColor}}>
    </div>
  )
}

export default Box
