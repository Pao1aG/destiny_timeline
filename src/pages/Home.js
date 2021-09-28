import React, { useState, useEffect } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import { useRive } from 'rive-react';
import '../styles/Home.css';
// import Ghost from '../components/Ghost'
import Timeline from './Timeline';
import Sidepanel from '../components/Sidepanel';
import Content from '../components/Content';

export default function Home() {

    const [question, setNewQuestion] = useState("home");
    const [selection, setSelection] = useState([]);
    const [render, setRender] = useState("");
    const [attr, setAttr] = useState("");

    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);

        var elemsA = document.querySelectorAll('.tooltipped');
        M.Tooltip.init(elemsA);

        var elemsB = document.querySelectorAll('.parallax');
        M.Parallax.init(elemsB);
    })

    //TODO Ghost Animation
    const params = {
        src: "images/destiny_ghost.riv",
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

    
    function saveResponse(response, q, final, animation) {

        if(animation === "play1"){
            wave();
        } else if (animation === "play2") {
            bow();
        }

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

    return (
        <>
            <div className={attr === "hidden" ? "hide" : "container question-container"}>
                <div className="row">
                    <div className="col s12 m6 l7 text-container center-align">
                        <p> Welcome! Let's tailor your experience...</p>
                        <p> Are you a new or returning Guardian?</p>
                        {/* <Ghost /> */}
                        <div style={{ height: "300px", width: "600px"}}>
                            <RiveComponent />
                            <button onClick={ backSpin }>Back Spin</button>
                            <button onClick={ backMove }>Back Move</button>
                            <button onClick={ wave }>Wave</button>
                            <button onClick={ sneeze }>Sneeze</button>
                            <button onClick={ bow }>Bow</button>
                        </div>
                        
                    </div>
                    <div className={question === "home" ? "col s12 m6 l3 button-container" : "hide"}>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"guardianType": "new"}, "new", "", "play1")}> I'm a new Guardian</a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"guardianType": "returning"}, "returning", "", "play2")}> I'm a returning Guardian</a>
                    </div>
                    {/* NEW GUARDIAN QUESTIONS */}
                    <div className={question === "new" ? "col s12 m6 l3 button-container" : "hide"}>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"newTimeline": "entire"}, "seasons1")}> Entire Timeline</a>
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
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"misc": "yes"}, "seasons1")}> Yes </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"misc": "no"}, "seasons1")}> No </a>
                    </div>
                    <div className={question === "seasons1" ? "col s12 m6 l3 button-container" : "hide"}>
                        <h4> Do you want to see individual seasons? </h4>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"seasons": "yes"}, "", true)}> Yes </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"seasons": "no"}, "", true)}> No </a>
                    </div>
               
                    {/* RETURNING GUARDIAN QUESTIONS */}
                    <div className={question === "returning" ? "col s12 m6 l3 button-container" : "hide"}>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"returningTimeline": "entire"}, "highlightsA")}> Entire Timeline</a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"returningTimeline": "catch"}, "catch")}> Catch Up </a>
                    </div>
                    <div className={question === "highlightsA" ? "col s12 m6 l3 button-container" : "hide"}>
                        <h4> Do you want to include Exotics and Exotic Quests? </h4>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"exotics": "yes"}, "highlightsB")}> Yes </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"exotics": "no"}, "highlightsB")}> No </a>
                    </div>
                    <div className={question === "highlightsB" ? "col s12 m6 l3 button-container" : "hide"}>
                        <h4> Do you want to include Raids and Dungeons? </h4>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"raids": "yes"}, "highlightsC")}> Yes </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"raids": "no"}, "highlightsC")}> No </a>
                    </div>
                    <div className={question === "highlightsC" ? "col s12 m6 l3 button-container" : "hide"}>
                        <h4> Do you want to include Miscellaneous missions? </h4>
                        <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"misc": "yes"}, "seasonsA")}> Yes </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"misc": "no"}, "seasonsA")}> No </a>
                    </div>
                    <div className={question === "catch" ? "col s12 m6 l3 button-container" : "hide"}>
                        {/* <a className="waves-effect waves-light btn-large" onClick={() =>  saveResponse({"chapter": "destiny1"}, "seasonsA")}> Destiny 1 </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "takenKing"}, "seasonsA")}> Taken King </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "riseOfIron"}, "seasonsA")}> Rise of Iron </a> */}
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "destiny2"}, "seasonsA")}> Destiny 2 </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "curseOfOsiris"}, "seasonsA")}> Curse of Osiris </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "warmind"}, "seasonsA")}> Warmind </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "forsaken"}, "seasonsA")}> Forsaken </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "shadowkeep"}, "seasonsA")}> Shadowkeep </a>
                        <a className="waves-effect waves-light btn-large"  onClick={() => saveResponse({"chapter": "beyondLight"}, "seasonsA")}> Beyond Light </a>
                    </div>
                    <div className={question === "seasonsA" ? "col s12 m6 l3 button-container" : "hide"}>
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