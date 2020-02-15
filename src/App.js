import React, {useState} from 'react';
import './style/style_login.css';
import axios from "axios";

function App() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const sendParams = (name) => event => {
    if ([name] == 'user')
      setUser(event.target.value);
    else 
      setPassword(event.target.value);
  } 

  const acessDB = () => {
    axios.post('http://localhost:3000/login', {  user, password })
      .then( success => {
        console.log('Success');
      }).catch( err => {
        console.log('There was a wrong');
      });
  }

  return (
    <div className='panel'>
      <form>
      <label >User</label> <br></br>
       <input type='text' id='name' onChange={sendParams('user')}  placeholder='user'/>     
       <p></p>   
       <label >Password</label> <br></br>
       <input type='password' id='password' onChange={sendParams('password')} placeholder='password' /> 
       <p></p>
       <button id='submit' onclick={acessDB()}>Login</button>   
      </form>
    </div>
  );
}

export default App;
