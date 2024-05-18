import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  let nameRef = useRef(null);
  let passwordRef = useRef(null);
  let objRef = useRef([]);

  useEffect(() => {
    // Correct the focus sequence
    nameRef.current.focus();
  }, []);
  

  function name() {
    console.log(nameRef.current.value);
    if (nameRef.current.value.length >= 8) {
      console.log("Valid");
      document.getElementById('ok').innerHTML = 'Valid: ' + nameRef.current.value;
    } else {
      console.log("Invalid");
      document.getElementById('ok').innerHTML = 'Invalid: ' + nameRef.current.value;
    }
  }

  function password() {
    console.log(passwordRef.current.value);
    if (passwordRef.current.value.length >= 8) {
      console.log("Valid");
      document.getElementById('okk').innerHTML = 'Valid: ' + passwordRef.current.value;
    } else {
      console.log("Invalid");
      document.getElementById('okk').innerHTML = 'Invalid: ' + passwordRef.current.value;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    let obj = {
      name: nameRef.current.value,
      password: passwordRef.current.value
    };
    // Update the objRef with new object
    objRef.current = [...objRef.current, obj];
    console.log('Updated array:', objRef.current);

    
     
   
    
  }

  return (
    <>
      <h2 style={{ textAlign: "center", color: 'green' }}>.............DYNAMIC INPUT FOCUS TAB & CLICK.............</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name
          <input onChange={name} ref={nameRef} type="text" placeholder='Enter Name' />
        </label>
        <br />
        <span id='ok'></span>
        <br />
        <label htmlFor="">Password
          <input onChange={password} ref={passwordRef} type="password" placeholder='Enter Password' />
        </label>
        <br />
        <span id='okk'></span>
        <br /><br />
        <button type='submit'>Submit</button>
      </form>
    
      
    </>
  );
}

export default App;
