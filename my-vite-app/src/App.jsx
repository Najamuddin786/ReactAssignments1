import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const [master, setMaster] = useState([]);

  const createUser = (e) => {
    e.preventDefault();
    const obj = { name, age, country, gender };
    setMaster([...master, obj]);
    console.log(master);
  };

  const removeUser = (index) => {
    const newMaster = master.filter((_, i) => i !== index);
    setMaster(newMaster);
  };

  return (
    <>
      <h2>ToDo List User</h2>
      <form onSubmit={createUser}>
        <input
          type="text"
          placeholder="Enter Name....."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <select onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="bhutan">Bhutan</option>
          <option value="china">China</option>
        </select>
        <label>
          Male:
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          Female:
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
        </label>
        <button type="submit">Create Todo User</button>
      </form>

      <div>
        {master.map((e, i) => (
          <div key={i}>
            <h4>ID: {i + 1}</h4>
            <h4>Name: {e.name}</h4>
            <h4>Age: {e.age}</h4>
            <h4>Country: {e.country}</h4>
            <h4>Gender: {e.gender}</h4>
            <button onClick={() => removeUser(i)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
