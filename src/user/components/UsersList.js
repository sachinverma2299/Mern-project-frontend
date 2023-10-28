import React from "react";
import UserItem from "./UserItem";

const UsersList = (props) => {
    if(props.items.length === 0) {
        return (
            <div className="center">
                No users found.
            </div>
        )
    }
    return (
        <ul>
            {props.items.map((user)=>{
                return( 
                    <UserItem
                        key={user.id}
                        id={user.id}
                        image={user.image}
                        name={user.name}
                        placeCount={user.places}>
                </UserItem>
                )
            })}
        </ul>
    )


}
export default UsersList