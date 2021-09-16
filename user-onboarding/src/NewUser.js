import React from 'react'



export default function NewUser({ details }) {
    if (!details) {
      return <h3>Working fetching your user details...</h3>
    }
  
    return (
      <div className='user-container'>
        <p>Name: {details.first_name + " " + details.last_name}</p>
        <p>Email: {details.email}</p>
        <p>UserID: {details.id}</p>

        
      </div>
    )
  }
