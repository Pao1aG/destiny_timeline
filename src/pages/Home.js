import React, { useState } from 'react';
import '../styles/Home.css'

export default function Home() {

    const [question, setNewQuestion] = useState("home");
    const [selection, setSelection] = useState([]);

    function saveResponse(response, q, final) {
        if(selection.length === 0){
            //to save first response
            setSelection([response]);
        } else {
            // spread previous responses and save new response
            setSelection([...selection, response])
        }

        //hide previous questions and make new ones appear based on the question state
        setNewQuestion(q);

        //if final question, then we should navigate away from home "/" and into timeline "/timeline"
        //in the timeline component, we will map over saved array inside selection and generate it that way
        if(final === true){
            console.log("this should generage Timeline component")
        }
       
    }

    console.log(selection);
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 l7 text-container center-align">
                        <p> Welcome! Let's tailor your experience...</p>
                        <p> Are you a new or returning Guardian?</p>
                        <img src="images/ghost_freezeframe.jpg" alt=""></img>
                    </div>
                    <div className={question === "home" ? "col s12 m6 l3 button-container" : "hide"}>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"guardianType": "new"}, "new")}> I'm a new Guardian</a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"guardianType": "returning"}, "returning")}> I'm a returning Guardian</a>
                    </div>
                    {/* NEW GUARDIAN QUESTIONS */}
                    <div className={question === "new" ? "col s12 m6 l3 button-container" : "hide"}>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"newTimeline": "entire"}, "", true)}> Entire Timeline</a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"newTimeline": "highlights"}, "highlights")}> Highlights</a>
                    </div>
                    <div className={question === "highlights" ? "col s12 m6 l3 button-container" : "hide"}>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"highlights": "exotics"}, "", true)}> Exotics </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"highlights": "raids"}, "", true)}>Raids and Dungeons </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"highlights": "misc"}, "", true)}>Misc Missions </a>
                    </div>
                    {/* RETURNING GUARDIAN QUESTIONS */}
                    <div className={question === "returning" ? "col s12 m6 l3 button-container" : "hide"}>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"returningTimeline": "entire"}, "", true)}> Entire Timeline</a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"returningTimeline": "catch"}, "catch")}> Catch Up From Certain Point</a>
                    </div>
                    <div className={question === "catch" ? "col s12 m6 l3 button-container" : "hide"}>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"chapter": "destiny1"}, "", true)}> Destiny 1 </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "takenKing"},"", true)}> Taken King </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "riseOfIron"},"", true)}> Rise of Iron </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "destiny2"},"", true)}> Rise of Iron </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "curseOfOsiris"},"", true)}> Curse of Osiris </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "warmind"},"", true)}> Warmind </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "forsaken"},"", true)}> Forsaken </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "shadowkeep"},"", true)}> Shadowkeep </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "beyondLight"},"", true)}> Beyond Light </a>
                    </div>
                </div>
            </div>
        </>
    )
}