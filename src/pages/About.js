import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return(
        <>
            <h1>This is the About Page</h1>
            <h3> This is a link to <Link to= "/">Home</Link></h3>
            <h3> This is a link to <Link to= "/timeline">Timeline</Link></h3>
        </> 
    )
}