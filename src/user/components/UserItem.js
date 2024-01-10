import React from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import { Link } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card";
import './UserItem.css'

const UserItem = (props) => {
    return (
        <li className="user-item">
            <Card className="user-item_content">
                <Link to={`/${props.id}/places`}>
                    <div className="user-item_image">
                        <Avatar className="img" image={`http://localhost:5000/${props.image}`} alt={props.image}></Avatar>
                    </div>
                    <div className="user-item_info">
                        <h2>{props.name}</h2>
                        <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places' }</h3>
                    </div>
                </Link>
            </Card>
        </li>
    )

}
export default UserItem