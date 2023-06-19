// Code Keypad Component Here
import React from "react";

function Keypad() {
    function inputHandler(event) {

        console.log(`Entering password...`)
    }

    return (
        <div>
            <input type="password" onChange={inputHandler} />
        </div>
    )
}

export default Keypad;