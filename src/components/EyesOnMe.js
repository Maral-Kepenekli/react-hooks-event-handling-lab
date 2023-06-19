// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
 function focusEvent(event) {
  console.log("Good!");
 }

 function blurEvent(event) {
  console.log("Hey! Eyes on me!")
 }

 return (
  <div>
   <button onFocus={focusEvent} onBlur={blurEvent}>Eyes on me</button>
  </div>
 );
}

export default EyesOnMe;