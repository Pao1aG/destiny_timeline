import React from 'react';

export default function Sidepanel () {


    return (
        <div className="center-align side-panel">
            <ul className="sidenav sidenav-fixed" id="slide-out">
                <li> 
                    <img src="http://placekitten.com/g/200/200" alt="" 
                    className="btn tooltipped" 
                    data-position="right" 
                    data-tooltip="Meow" 
                    id="btn-icons"/>
                </li>
                <li id="dots">
                    <i class="medium material-icons icon-white">more_vert</i>
                </li>
                <li> 
                    <img src="http://placekitten.com/g/200/200" alt="" 
                    className="btn tooltipped" 
                    data-position="right" 
                    data-tooltip="Meow" 
                    id="btn-icons"/>
                </li>
                <li id="dots">
                    <i class="medium material-icons icon-white">more_vert</i>
                </li>
                <li> 
                    <img src="http://placekitten.com/g/200/200" alt="" 
                    className="btn tooltipped" 
                    data-position="right" 
                    data-tooltip="Meow" 
                    id="btn-icons"/>
                </li>
                <li id="dots">
                    <i class="medium material-icons icon-white">more_vert</i>
                </li>
                <li> 
                    <img src="http://placekitten.com/g/200/200" alt="" 
                    className="btn tooltipped" 
                    data-position="right" 
                    data-tooltip="Meow" 
                    id="btn-icons"/>
                </li>
                <li id="dots">
                    <i class="medium material-icons icon-white">more_vert</i>
                </li>
                <li> 
                    <img src="http://placekitten.com/g/200/200" alt="" 
                    className="btn tooltipped" 
                    data-position="right" 
                    data-tooltip="Meow" 
                    id="btn-icons"/>
                </li>
                <li id="dots">
                    <i class="medium material-icons icon-white">more_vert</i>
                </li>
                <li> 
                    <img src="http://placekitten.com/g/200/200" alt="" 
                    className="btn tooltipped" 
                    data-position="right" 
                    data-tooltip="Meow" 
                    id="btn-icons"/>
                </li>
            
            </ul> 
            <div id="icon-div">
                <a href="/timeline" data-target="slide-out" className="sidenav-trigger" id="hide-icon"><i class="large material-icons left icon-white">chevron_right</i></a>    
            </div>
        </div>
    )
}