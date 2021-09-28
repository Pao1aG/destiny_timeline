import React, { useEffect, useState } from 'react';
import { useRive, useStateMachineInput } from 'rive-react';

export default function Ghost(props) {
    console.log("This is from ghost");
    console.log(props)

    const[buttonText, setButtonText] = useState("Pause");

    const params = {
        src: "images/destiny_ghost.riv",
        // src: "images/poison-loader.riv",
        autoplay: true,
        animations: ["idle_hover", "back_spin", "back_move", "choose_ani_1", "choose_ani_2", "choose_ani_3" ]
    }

    const { RiveComponent, rive } = useRive(params);


    function backSpin() {
        if(rive){
            rive.play("back_spin")
        }
    }

    function backMove() {
        if(rive){
            rive.play("back_move")
        }
    }

    function wave() {
        if(rive) {
            rive.play("choose_ani_1");
        }
    }

    function sneeze() {
        if(rive) {
            rive.play("choose_ani_2")
        }
    }

    function bow() {
        if(rive) {
            rive.play("choose_ani_3")
        }
    }

    //TODO: ANIMATION BASED ON SELECTION
    if(props.selection.guardianType === "new") {
        if(rive){
            rive.play("choose_ani_1")
        }
    } else {
        if(rive){
            rive.play("choose_ani_3")
        }
    }

    //FIRST ANIMATION TEST
    // useEffect(() => {
    //     if(rive) {

    //       rive.on("play", () => {
    //           setButtonText("Pause")
    //           console.log("I am playing")
    //       });

    //       rive.on("pause", () => {
    //           setButtonText("Play");
    //           console.log("I am paused");
    //       })
    //     }

    // },[rive])

    // function onButtonClick() {
    //     if(rive) {
    //         if(rive.isPlaying){
    //             rive.pause();
    //             console.log("the pause button was clicked");
    //         } else {
    //             rive.play();
    //         } 
    //     }
    // }

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
            {/* <button onClick={onButtonClick}>{buttonText}</button> */}
            <button onClick={ backSpin }>Back Spin</button>
            <button onClick={ backMove }>Back Move</button>
            <button onClick={ wave }>Wave</button>
            <button onClick={ sneeze }>Sneeze</button>
            <button onClick={ bow }>Bow</button>
        </div>
            
    )
}