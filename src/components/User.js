import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  { useParams, Link, Routes, useLocation } from 'react-router-dom'

function User() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    let {id} = useParams({});
    

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data))
        .finally(()=> setLoading(false))
    }, [id])
    console.log(user)
   return (
    <div>
       <h1>User Detail </h1> 
       {loading && <div>Loading...</div> }
       {!loading && <code>
           {JSON.stringify(user)}
       </code>}
       <br/>
       <br/>

       <Link to={`/users/user/${parseInt(id)+1}`}>Next User ({parseInt(id)+1})</Link>

       {/* <Routes>
           <Route></Route>
       </Routes> */}
    </div>
  )
}

export default User