import React, { Suspense } from 'react';
import Users from "@/app/components/Users";
const usersPromise=async()=>{
     const data = await fetch('http://localhost:5000/users')
    return data.json()
}

const UserPage =async  () => {
   
    return (
        <div>
            User Data Coming soon
            <Suspense fallback={<h2>Loading...</h2>}>
            <Users usersPromise={usersPromise()}></Users>
            </Suspense>
        </div>
    );
};

export default UserPage;