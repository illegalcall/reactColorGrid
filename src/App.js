import './App.css';
import Box from './Box';
function App() {
  const n = 18;
  return (
    <div className="App">
      {
        [...Array(n)].map((elementInArray, index) => {
          return(
          <Box key={index} index={index}/>
        )
        }) 
      }
    </div>
  );
}

export default App;
