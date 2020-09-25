import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: "u1",
            name: "Geroge Constanza",
            image:
                "https://images.pexels.com/photos/5282392/pexels-photo-5282392.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            places: 3,
        },
    ];
    return <UsersList users={USERS} />;
};

export default Users;
