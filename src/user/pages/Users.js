import React from "react"
import UsersList from "../components/UsersList"

const Users = () => {
    const USERS =[
        {
            id:'u1',
            name:'Sachin verma',
            image:'https://wallpaper-house.com/data/out/8/wallpaper2you_267943.jpg',
            places:3
        }
    ];

    return <UsersList items={USERS}></UsersList>

}
export default Users