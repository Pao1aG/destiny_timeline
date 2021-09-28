import React, { useEffect, useState } from 'react';
import { useRive, useStateMachineInput } from 'rive-react';

export default function Ghost() {
    const[buttonText, setButtonText] = useState("Pause");

    const params = {
        // src: "images/destiny_ghost.riv",
        src: "images/poison-loader.riv",
        autoplay: true,
    }

    const { RiveComponent, rive } = useRive(params);

    //FIRST ANIMATION TEST
    useEffect(() => {
        if(rive) {

          rive.on("play", () => {
              setButtonText("Pause")
              console.log("I am playing")
          });

          rive.on("pause", () => {
              setButtonText("Play");
              console.log("I am paused");
          })
        }

    },[rive])

    function onButtonClick() {
        if(rive) {
            if(rive.isPlaying){
                rive.pause();
                console.log("the pause button was clicked");
            } else {
                rive.play();
            } 
        }
    }

    //SECOND ANIMATION TEST
    
    // function onMouseEnter() {
    //     if(rive) {
    //         rive.play();
    //     }
    // }

    // function onMouseLeave() {
    //     if(rive) {
    //         rive.pause();
    //     }
    // }

    return (
        <div style={{ height: "300px", width: "600px"}}>
            <RiveComponent 
                // onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
            />
            <button onClick={onButtonClick}>{buttonText}</button>
        </div>
            
    )
}