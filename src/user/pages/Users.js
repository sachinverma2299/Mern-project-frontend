import React from "react"
import UsersList from "../components/UsersList"

const Users = () => {
    const USERS =[
        {
            id:'u1',
            name:'Sachin verma',
            image:'https://media.zigcdn.com/media/content/2023/Mar/cover_641aba80ead92.jpg',
            places:3
        }
    ];

    return <UsersList items={USERS}></UsersList>

}
export default Users