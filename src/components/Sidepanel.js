import React from 'react';

export default function Sidepanel () {
    

    return (
        <div className="center-align side-panel">
            <ul className="sidenav sidenav-fixed" id="slide-out">
                <li> 
                    <img src="http://placekitten.com/g/200/200" alt=""/>
                </li>
                <li> 
                    <img src="http://placekitten.com/g/200/200" alt=""/>
                </li>
                <li> 
                    <img src="http://placekitten.com/g/200/200" alt=""/>
                </li>
                <li> 
                    <img src="http://placekitten.com/g/200/200" alt=""/>
                </li>
                <li> 
                    <img src="http://placekitten.com/g/200/200" alt=""/>
                </li>
            </ul> 
            <div id="icon-div">
                <a href="/timeline" data-target="slide-out" className="sidenav-trigger" id="hide-icon"><i class="large material-icons left icon-white">chevron_right</i></a>    
            </div>
        </div>
    )
}