import React, {useEffect, useState} from 'react';
import './Customapi.css';

function Customapi(){
// return(
//     <div className=''>
        
//     </div>    ) 
const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <main>
      <h1>User List</h1>
      <ul>
        {user && user.length > 0 && user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.name}</li>
          ))}
        {user && user.length > 0 && user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.email}</li>
          ))}
      </ul>
    </main>
  );  
}



    export default Customapi;