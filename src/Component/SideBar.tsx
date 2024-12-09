// src/Sidebar.tsx
import React from 'react';
import '../styles/Components/SideBar.css'; // Create this CSS file for sidebar styles if needed

const Sidebar: React.FC = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#bored?">Bored?</a></li>
            </ul>
        </nav>
    );
};

export default Sidebar;