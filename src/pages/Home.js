import React, { useState } from 'react';
import '../styles/Home.css'
import Timeline from './Timeline';
import Sidepanel from '../components/Sidepanel';
import Content from '../components/Content';

export default function Home() {

    const [question, setNewQuestion] = useState("home");
    const [selection, setSelection] = useState([]);
    const [render, setRender] = useState("");
    const [attr, setAttr] = useState("");

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
            console.log("this should generate Timeline component");
            setRender(true);
            setAttr("hidden");
        }
       
    }

    // console.log(selection);
    
    return (
        <>
            <div className={attr === "hidden" ? "hide" : "container question-container"}>
                <div className="row">
                    <div className="col s12 m6 l7 text-container center-align">
                        <p> Welcome! Let's tailor your experience...</p>
                        <p> Are you a new or returning Guardian?</p>
                        <img src="images/ghost_freezeframe.jpg" alt="" id="ghost"></img>
                    </div>
                    <div className={question === "home" ? "col s12 m6 l3 button-container" : "hide"}>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"guardianType": "new"}, "new")}> I'm a new Guardian</a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"guardianType": "returning"}, "returning")}> I'm a returning Guardian</a>
                    </div>
                    {/* NEW GUARDIAN QUESTIONS */}
                    <div className={question === "new" ? "col s12 m6 l3 button-container" : "hide"}>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"newTimeline": "entire"}, "seasonsNew")}> Entire Timeline</a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"newTimeline": "highlights"}, "highlights1")}> Highlights</a>
                    </div>
                    <div className={question === "highlights1" ? "col s12 m6 l3 button-container" : "hide"}>
                        <h4> Do you want to include Exotics and Exotic Quests? </h4>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"exotics": "yes"}, "highlights2")}> Yes </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"exotics": "no"}, "highlights2")}> No </a>
                    </div>
                    <div className={question === "highlights2" ? "col s12 m6 l3 button-container" : "hide"}>
                        <h4> Do you want to include Raids and Dungeons? </h4>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"raids": "yes"}, "highlights3")}> Yes </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"raids": "no"}, "highlights3")}> No </a>
                    </div>
                    <div className={question === "highlights3" ? "col s12 m6 l3 button-container" : "hide"}>
                        <h4> Do you want to include Miscellaneous missions? </h4>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"misc": "yes"}, "seasonsNew")}> Yes </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"misc": "no"}, "seasonsNew")}> No </a>
                    </div>
                    <div className={question === "seasonsNew" ? "col s12 m6 l3 button-container" : "hide"}>
                        <h4> Do you want to see individual seasons? </h4>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"seasons": "yes"}, "", true)}> Yes </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"seasons": "no"}, "", true)}> No </a>
                    </div>
               
                    {/* RETURNING GUARDIAN QUESTIONS */}
                    <div className={question === "returning" ? "col s12 m6 l3 button-container" : "hide"}>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"returningTimeline": "entire"}, "seasons")}> Entire Timeline</a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"returningTimeline": "catch"}, "catch")}> Catch Up </a>
                    </div>
                    <div className={question === "catch" ? "col s12 m6 l3 button-container" : "hide"}>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"chapter": "destiny1"}, "seasons")}> Destiny 1 </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "takenKing"}, "seasons")}> Taken King </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "riseOfIron"}, "seasons")}> Rise of Iron </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "destiny2"}, "seasons")}> Destiny 2 </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "curseOfOsiris"}, "seasons")}> Curse of Osiris </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "warmind"}, "seasons")}> Warmind </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "forsaken"}, "seasons")}> Forsaken </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "shadowkeep"}, "seasons")}> Shadowkeep </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "beyondLight"}, "seasons")}> Beyond Light </a>
                    </div>
                    <div className={question === "seasons" ? "col s12 m6 l3 button-container" : "hide"}>
                        <h4> Do you want to see individual seasons? </h4>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"seasons": "yes"}, "", true)}> Yes </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"seasons": "no"}, "", true)}> No </a>
                    </div>
                </div>
            </div>
            {render === true ? 
                <>
               <Timeline selection={selection}/>
               <Sidepanel />
               <Content />
               </>
            : "not rendering yet"}
        </>
    ) 
}