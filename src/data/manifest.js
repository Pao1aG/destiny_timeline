import React from "react";

/* Delete this when going thru this, grabbed from ur previous repo */
//import Project from "./Project";
//import Assignment from "./Assignment";
//import "../styles/Portfolio.css";

const timeline_events = [
    {
        id: "",                                 // ID
        title: "",                              // Title of the event
        subtext: "",                            // Subtext of the event
        mission_type: "",                       // CAMPAIGN, RAD, EXOTIC, MISC
        header_img: "TBD",                      // Image placed below title
        icon_img: "TBD",                        // Corresponding icon
        weapon_folder: "TBD",                   // Rotating weapon images
        image_folder: "TBD",                    // Extra images to be displayed in the right panel
        description: "",
    },
    {
        id: "100",
        title: "The Red War",
        subtext: "Destiny 2 Year 1 - 09.06.17",
        mission_type: "CAMPAIGN",
        header_img: "TBD",
        weapon_folder: "TBD",
        image_folder: "TBD",
        description: "Dominus Ghaul has stolen the light of the Traveler, the Vanguard is broken, and Guardians are hopeless. Take the journey to restore your light and destroy the Red Legion.",
    },
    {
        id: "100.1",
        title: "Leviathan",
        subtext: "Destiny 2 Year 1 - 10.18.17",
        mission_type: "RAD",
        header_img: "TBD",
        weapon_folder: "TBD",
        image_folder: "TBD",
        description: "Calus has selected you to partake in his flying golden palace. Endulge him. Humor him. And his rewards are yours.",
    },
    {
        id: "100.2",
        title: "Trials of the Nine",
        subtext: "Destiny 2 Year 1 - 2017",
        mission_type: "MISC",
        header_img: "TBD",
        weapon_folder: "TBD",
        image_folder: "TBD",
        description: "The Nine welcome the Guardians to compete against each other and reap the rewards offered by the emissary.",
    },
    {
        title: "Curse of Osiris",
        subtext: "Destiny 2 Year 1 - 2017",
        mission_type: "CAMPAIGN",
        header_img: "TBD",
        weapon_folder: "TBD",
        image_folder: "TBD",
        description: "Help Osiris escape the Tree of Probabilities and stop Panoptes from simulating a Dark Future.",
    },
    {
        title: "Eater of Worlds",
        subtext: "Destiny 2 Year 1 - 2017",
        mission_type: "RAD",
        header_img: "TBD",
        weapon_folder: "TBD",
        image_folder: "TBD",
        description: "Calus has a Vex clogging his drain in the depths of the Leviathan.",
    },
    {
        title: "Legends Lost",
        subtext: "Destiny 2 Year 1 - 2017",
        mission_type: "MISC",
        header_img: "TBD",
        weapon_folder: "TBD",
        image_folder: "TBD",
        description: "Find the remains of Saint-14.",
    },
]

//MAP OVER CARD ARRAY TO FILL OUT PROJECT COMPONENT WITH PROPS
function Portfolio() {
    return(
        <>
        <div className="row">
            {projects.map((project) => 
            <Project 
            {...project}
            key={project.id} />)}
        </div>
        <div className="row">
            {assignments.map((assignment) => 
            <Assignment
            {...assignment}
            key={assignment.id}/>)}
            {/* <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">arrow_upward</i></a> */}
        </div>
        </>
    )
}

export default Portfolio