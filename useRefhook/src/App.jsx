import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function UncontrolledInput() {
  const inputRef = useRef(null);

  // const handleInputChange = () => {
  //   console.log(inputRef.current.value);
  //   document.getElementById('currentValue').innerText = inputRef.current.value;
  // };
  function handleChange(){
    console.log(inputRef.current.value)
    document.getElementById('ok').innerHTML=inputRef.current.value
  }

  return (
    <div>
      {/* <input ref={inputRef} type="text" onChange={handleInputChange} />
      <p>Current Value: <span id="currentValue"></span></p> */}
      <label htmlFor="">Enter Here <input type="text" ref={inputRef} onChange={handleChange} placeholder='Enter here'/></label><br />
      Current Value <span id='ok'></span>
    </div>
  );
}


function BackGround(){
  let divRef = useRef(null)
function change(){
  divRef.current.style.background='green'
 

}

  return (<>
        <div ref={divRef} style={{height:"20vh",border:'2px dotted gray',display:"flex",justifyContent:"center",alignItems:'center'}}>
          <button onClick={change} style={{background:"red",color:"white"}}>Change Background</button>
        </div>
  </>)
}



function App() {
  const inputRef=useRef(null)

useEffect(()=>{
      inputRef.current.focus();
},[])
  
  return (
    <>
     <label>Name <input ref={inputRef} type="text" placeholder='Enter Your Name'/></label><br />

     <UncontrolledInput/>
     <BackGround/>
    </>
  )
}

export default App
