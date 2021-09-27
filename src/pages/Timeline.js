import React from 'react';
// import { Link } from 'react-router-dom';

export default function Timeline(props) {
    console.log("This should be the responses from Timeline component")
    console.log(props.selection);

    return(
        <>
            <h1>This is the Timeline</h1>
            {props.selection[0].guardianType === "new" ? 
                <div>
                    <h3> This guardian should be NEW </h3>
                    <p>The selected guardian type is {props.selection[0].guardianType}</p>

                    {props.selection[1].newTimeline === "entire" ? 
                        <p> Wants to include entire timeline </p> 
                        :
                        <>
                            <p>They chose highlights</p>
                            <p>Want to include exotics? {props.selection[2].exotics}</p>
                            <p>Want to include raids? {props.selection[3].raids}</p>
                            <p>Want to include misc? {props.selection[4].misc}</p>
                        </>
                    
                    }
                    <p>Want to include individual seasons? {props.selection[5].seasons}</p>
                </div> 
                
                :

                <div>
                    <h3> This guardian should be RETURNING </h3>
                    <p>The selected guardian type is {props.selection[0].guardianType}</p>

                    {props.selection[1].returningTimeline === "entire" ? 
                        <p> Wants to include entire timeline </p>
                        :

                        <>
                            <p>They want to catch up from a certain point</p>
                            <p>They want to catch up from {props.selection[2].chapter} </p>
                        </>
                    }
                    <p>Want to include individual seasons? {props.selection[3].seasons}</p>
                </div>
            }
        </>
    )
}