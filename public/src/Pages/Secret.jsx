import React from 'react';
import { useNavigate } from 'react-router-dom';

const Secret = () => {
    const navigate = useNavigate();

    const logOut = () => {
        navigate('/register');
    };
    return (
        <div className='private'>
            <h1>User Page</h1>
            <button onClick={logOut}>Log Out</button>
        </div>
    );
};

export default Secret;