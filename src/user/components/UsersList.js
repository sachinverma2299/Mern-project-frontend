import React from "react";

import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";
import './UsersList.css'

const UsersList = (props) => {
    if(props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    No users found.
                </Card>
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
                        placeCount={user.places.length}>
                </UserItem>
                )
            })}
        </ul>
    )


}
export default UsersList