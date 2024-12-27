import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Contexts'
import { useParams } from 'react-router-dom';


export default function UserProfile() {
  // const [user, setUser] = useState({});
  const userData = useContext(AuthContext);
  const url_params = useParams()
  console.log(url_params);

  // useEffect(() => {
  //   if(userData) {
  //     setUser(userData)
  //   }
  // }, [userData]);

  return (
    <div>Hello, {url_params.username}. Your ID is {userData.id}</div>
  )
}
