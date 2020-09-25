import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const PLACES = [
    {
        id: "p1",
        title: "Rakitovica",
        description: "Selo u kojem se sve moguce",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Rakitovica.jpg/1200px-Rakitovica.jpg",
        address: "Croatia",
        location: {
            lat: "45.7187104",
            lng: "18.159498",
        },
        creator: "u1",
    },
    {
        id: "p2",
        title: "Rakitovica",
        description: "Selo u kojem se sve moguce",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Rakitovica.jpg/1200px-Rakitovica.jpg",
        address: "Croatia",
        location: {
            lat: "45.7187104",
            lng: "18.159498",
        },
        creator: "u2",
    },
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = PLACES.filter((place) => place.creator === userId);
    return <PlaceList places={loadedPlaces} />;
};

export default UserPlaces;
