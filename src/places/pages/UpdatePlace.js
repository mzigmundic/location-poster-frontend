import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./PlaceForm.css";

const PLACES = [
    {
        id: "p1",
        title: "Rakitovica",
        description: "Selo u kojem se sve moguce",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Rakitovica.jpg/1200px-Rakitovica.jpg",
        address: "Croatia",
        location: {
            lat: 45.7187104,
            lng: 18.159498,
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
            lat: 45.7187104,
            lng: 18.159498,
        },
        creator: "u2",
    },
];

const UpdatePlace = () => {
    const placeId = useParams().placeId;
    const identifiedPlace = PLACES.find((p) => (p.id = placeId));
    if (!identifiedPlace) {
        return (
            <div className="center">
                <h2>Could not find place</h2>
            </div>
        );
    }
    return (
        <form className="place-form">
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={VALIDATOR_REQUIRE()}
                errorText="Please enter a valid title"
                onInput={() => {}}
                value={identifiedPlace.title}
                valid={true}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={VALIDATOR_MINLENGTH(5)}
                errorText="Please enter a valid description min 5 chars"
                onInput={() => {}}
                value={identifiedPlace.description}
                valid={true}
            />
            <Button type="submit" disabled={true}>
                Update Place
            </Button>
        </form>
    );
};

export default UpdatePlace;
