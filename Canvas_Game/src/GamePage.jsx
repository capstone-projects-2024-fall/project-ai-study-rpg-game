import React from 'react';
import './index.css';




export default function GamePage(email){
    localStorage.setItem('email', email.email)
    return(
        <div>
            <iframe src='public/index.html' width='1000px' height='1000px'></iframe>
        </div>
    );
}

