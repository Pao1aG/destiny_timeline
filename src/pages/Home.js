import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <>
            <h1> This is the Home Page</h1>
            <h3>This is a link to <Link to="/about"> About Us </Link></h3>
            <h3>This is a link to <Link to="/timeline"> Timeline </Link></h3>
        </>
    )
}