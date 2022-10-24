import './App.css';
import db from './services/db.json';
import { useState } from 'react';

function App() {

  const [searchName, setSearchName] = useState('');

  return (
    <div className="container">
      <header className="flex">
        <h1>MySocial</h1>
        <input 
          type="search" 
          id="site-search" 
          placeholder='search' 
          onChange={(event) => {
            setSearchName(event.target.value)
          }}>
        </input>
      </header>
      <main className='flex flex-wrap-wrap'>
        {
          db.filter((val) => {
            if( searchName == '') {
              return val
            } else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
              return val
            }
          }).map((val, key) => {
            return (
              <div className='card' key={key}>
                <div className='flex image justify-content-center'>
                  <img src={val.picture} />
                </div>
                <p>name: {val.name}</p> 
                <p>age: {val.age}</p>
                <p>eyeColor: {val.eyeColor}</p>
                <p>company: {val.company}</p>
                <p>email: {val.email}</p>
              </div>)
          })
        }
      </main>
    </div>
  );
}

export default App;
