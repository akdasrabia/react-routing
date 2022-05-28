import React, { useEffect, useState } from "react";
import {Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import User from "./User";

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  let location  = useLocation()
  let navigate  = useNavigate()
    console.log(navigate)
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then(res => setUsers(res.data))
    .finally(()=> setLoading(false));
  },[])
  return (
    <div>
      <h1>Users</h1>
      {loading && <div>Loading...</div> }
      <ul>
        {
          users.map((user) => (
            <li key={user.id}>
          <Link to={`user/${user.id}`} >{user.name}</Link>
        </li>
          ))
        }
        
      </ul>
        <Routes>
          <Route exact path={location.pathname}>
            
          </Route>
          <Route path={`${location.pathname}/:id`} element={User}></Route>
        </Routes>


    </div>
  );
}

export default Users;
