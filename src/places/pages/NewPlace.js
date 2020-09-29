import React from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/useForm";
import "./PlaceForm.css";

const NewPlace = () => {
    const [formState, inputHandler] = useForm(
        {
            title: {
                value: "",
                isValid: false,
            },
            description: {
                value: "",
                isValid: false,
            },
            address: {
                value: "",
                isValid: false,
            },
        },
        false
    );

    const placeSubtmiHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs); // Send this to the backend
    };

    return (
        <form className="place-form" onSubmit={placeSubtmiHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 chars)"
                onInput={inputHandler}
            />
            <Input
                id="address"
                element="input"
                label="Address"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid address"
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
                Add Place
            </Button>
        </form>
    );
};

export default NewPlace;
