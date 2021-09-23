import React from 'react';
import { Link } from 'react-router-dom';

export default function Timeline() {
    return(
        <>
            <h1>This is the Timeline</h1>
            <h3>This is a link to <Link to= "/">Home</Link></h3>
            <h3>This is a link to <Link to= "/about">About</Link></h3>
        </>
    )
}