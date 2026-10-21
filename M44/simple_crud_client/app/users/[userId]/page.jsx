import React from 'react';

const UserDetailspage =async ({params}) => {

    const{userId}=await params;

    const res=await fetch(`http://localhost:5000/users/${userId}`)
    const user=await res.json()
    return (
        <div>
            <h2>whatever:{userId}</h2>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
        </div>
    );
};

export default UserDetailspage;