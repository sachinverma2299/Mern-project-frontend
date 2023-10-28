import React from "react";

const UserItem = (props) => {
    return (
        <li className="user-item">
            <div className="user-item_content">
                <div className="user-item_image">
                    <img src={props.images} alt={props.name}></img>
                </div>
                <div className="user-item_info">
                    <h2>{props.name}</h2>
                    <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places' }</h3>
                </div>
            </div>
        </li>
    )

}
export default UserItem