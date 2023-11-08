import React from "react"

import './NewPlaces.css'

import Input from "../../shared/components/FormElements/Input"
import { VALIDATOR_REQUIRE } from "../../shared/util/validators"
const NewPlaces = () => {
    return (
        <form className="place-form">
        <Input 
            element='input'
            type="text" 
            label='title' 
            errorText="please enter a valid title"
            validators={[VALIDATOR_REQUIRE()]}
            ></Input>

        </form>
    )

}
export default NewPlaces