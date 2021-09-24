import React, { useState, useEffect } from 'react';
import '../styles/Home.css'

export default function Home() {

    const [rerender, setRerender] = useState(false);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 l7 text-container center-align">
                        <p> Welcome! Let's tailor your experience...</p>
                        <p> Are you a new or returning Guardian?</p>
                        <img src="images/ghost_freezeframe.jpg"></img>
                    </div>
                    <div className="col s12 m6 l3 button-container">
                        <a className="waves-effect waves-light btn-large">I'm a new Guardian</a>
                        <a className="waves-effect waves-light btn-large">I'm a returning Guardian</a>
                    </div>
                </div>
            </div>
        </>
    )
}