import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES =[
    {
        id: 'p1',
        title:'Empire State Building',
        description: 'one of the most famous sky scrapper in the world.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg',
        address: '20 W 34th St., New York, NY 10001, USA',
        location: {
            lat: 40.123,
            lng: 41.214
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title:'Empire State Building',
        description: 'one of the most famous sky scrapper in the world.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg',
        address: '20 W 34th St., New York, NY 10001, USA',
        location: {
            lat: 40.123,
            lng: 41.214
        },
        creator: 'u2'
    }

]

const UserPlaces = (props) => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return (
        <PlaceList items={loadedPlaces}></PlaceList>
    )
}
export default UserPlaces