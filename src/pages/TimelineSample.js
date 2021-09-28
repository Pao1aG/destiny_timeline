import React, { useEffect } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import Sidepanel from '../components/Sidepanel';
import Content from '../components/Content';

export default function TimelineSample() {

    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);

        var elemsA = document.querySelectorAll('.tooltipped');
        M.Tooltip.init(elemsA);

        var elemsB = document.querySelectorAll('.parallax');
        M.Parallax.init(elemsB);
    })

    return (
        <>
        {/* SIDE PANEL ICONS GO INSIDE Sidepanel.js */}
        <Sidepanel />
        {/* CONTENT GOES HERE */}
        <Content />
       </>
    )
}