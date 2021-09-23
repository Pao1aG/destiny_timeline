import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <>
            <h1> This is the Home Page</h1>
            <div className="parallax-container">
                <div className="parallax"><img src="http://downloads.bungie.net/images/Wallpapers/Bungie_Day_Wallapaper_4k_01.jpg"/></div>
            </div>
            <div className="section white">
            <div className="row container">
                <h2 className="header">Parallax</h2>
                <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
            </div>
            </div>
            <div className="parallax-container">
                <div className="parallax"><img src="http://downloads.bungie.net/images/Wallpapers/Bungie_Day_Wallapaper_4k_02.jpg"/></div>
            </div>
        </>
    )
}