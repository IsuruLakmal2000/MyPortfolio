// src/HomePage.tsx
import React from 'react';
import '../styles/pages/HomePage.css';
import Sidebar from '../Component/SideBar';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
           <Sidebar />
            <div className="content">
                <h1>Welcome to My Portfolio</h1>
                <p></p>
            </div>
        </div>
    );
};

export default HomePage;