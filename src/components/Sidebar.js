import React from 'react';
import {useNavigate} from "react-router-dom";
import '../assets/css/styles.css';

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            <h2 onClick={() => navigate('/')}>Sidebar</h2>
            <ul>
                <li onClick={() => navigate('/sentiment')}>Sentiment analysis</li>
                <li onClick={() => navigate('/speech')}>Speech command recognition</li>
            </ul>
        </div>
    );
};

export default Sidebar;
