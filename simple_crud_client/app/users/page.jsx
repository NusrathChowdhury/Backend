import React from 'react';
import UserCard from '../../components/UserCard';
const UsersPage = async() => {
    const res=await fetch('http://localhost:5000/users')
    const users=await res.json()


    return (
        <div>
            <h2>Users:{users.length}</h2>  
            <div>
                {users.map(user => <UserCard key={user._id} user={user}/>)}
                </div>      
        </div>
    );
};

export default UsersPage;