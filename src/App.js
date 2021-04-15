import React,{useState}from 'react'
import './App.css'
import Button from './component/button'


function App() {

  const [count, setCount] = useState(0)

  const increment = ()=> setCount(count + 1);
  const decrement = ()=> setCount(count - 1);
  

  return (
    <>
    <div className='containerCount'>
      <h3>Count:</h3>
      <h1>{count}</h1>
    </div>
    < div className='containerButton'>
       <Button handle={decrement} text='-'/>
       <Button handle={increment} text='+'/> 
    </div> 
    <a href="https://codesandbox.io/s/withered-butterfly-sv66y" target="_blank">Open sandbox</a>
    </>
   
  );
}

export default App;
