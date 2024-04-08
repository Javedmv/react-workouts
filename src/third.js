import React, { useState, useEffect } from "react";
import axios from "axios";

function CounterApp() {
  const [count,setCount] = useState(0);
  const [userData,setUserData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

  useEffect(()=>{
    setLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)  
    .then((response)=>{
      setUserData(response.data);
      setLoading(false);
      setError(null);
    }).catch((error)=>{
      setLoading(false);
      setError('Error fetching userdata')
    })
  },[count])

  return (
    <div>
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={()=>{setCount(count + 1)}}>Increment</button>
      </div>
      {
        loading? (<p>loading...</p>) : error? (<p>{error}</p>) : userData && (
          <div >
            <h2>User information</h2>
            <p>name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
          </div>
        ) 
      }
    </div>
  );
}

export default CounterApp;
