
import React, { use } from 'react';

const Users = ({ usersPromise }) => {
    const users = use(usersPromise);

    return (
        <div>
            <h2>Users in the components: {users.length}</h2>

            {users.map((user, index) => (
                <div key={user.id}>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default Users;
