import React, { useState } from 'react';
import '../style/getstarted.css'
import { Link } from 'react-router-dom';

function GetStarted() {

    return (
        <div id="div-container" className="flex h-screen items-center justify-center">
            <div id="div-style" className='text-center'>
                <h1 className="text-4xl sm:text-6xl text-white font-bold mb-4">Click here to login</h1>
                <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-xl sm:text-4xl text-white font-bold py-2 px-4 rounded-full">Get Started</Link>
            </div>
        </div>
    );
}

export default GetStarted;