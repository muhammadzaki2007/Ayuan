import React, { useState } from 'react';
import './Admin.css';  // Import CSS buat styling
import Sidebar from './sideBar.js';
import Header from './header2.js';
import Card from '../components/Card'; // Asumsi Card adalah Home
import Overview from '../components/Profile';
import AboutMe from '../components/AboutMe';
import Skills from '../components/SkillPengalaman';

const Dashboard = () => {
    // State buat ngatur konten yang aktif
    const [activeTab, setActiveTab] = useState('home'); // Defaultnya Home

    // Fungsi buat render konten dinamis
    const renderContent = () => {
        switch(activeTab) {
            case 'overview':
                return <Overview />;
            case 'about':
                return <AboutMe />;
            case 'skills':
                return <Skills />;
            default:
                return <Card />; // Home by default
        }
    }

    return (
        <div className="app">
            <Sidebar />
            <div className="main">
                <Header />

                {/* Tombol navigasi */}
                <div className="tab-buttons">
                    <button onClick={() => setActiveTab('home')}>Home</button>
                    <button onClick={() => setActiveTab('overview')}>Overview</button>
                    <button onClick={() => setActiveTab('about')}>About Me</button>
                    <button onClick={() => setActiveTab('skills')}>Skill & Pengalaman</button>
                </div>

                {/* Konten dinamis yang berubah sesuai tombol yang diklik */}
                <div className="content">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
