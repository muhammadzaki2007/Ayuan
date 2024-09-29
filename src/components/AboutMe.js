import React, { useState, useEffect } from 'react';
// import Navigation from './Navigation';
import './Style.css';  // Import CSS buat styling
import { Link } from "react-router-dom";

const Profile = () => {
    const [content, setContent] = useState({ name: '', description: '' });

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://localhost:3005/api/me/get'); // Ganti path jadi /get
        const data = await response.json();
        setContent(data.content);
      }
      fetchData();
    }, []);
    return (
        <div className="card">
            <header>
                <h1>Curiculum Vitae</h1>
                <p>Posted by Ayuan</p>
            </header>
            <nav>
                <button className="btn btn-neutral-content">
                    <Link to="/">Home</Link>
                </button>
                <button><Link to="/Profile">Overview</Link></button>
                <button>About me</button>
                <button><Link to="/Skill">Skill&Pengalaman</Link></button>
            </nav>
            <h2>Nama: Ayuan</h2>
            <div className="profile">
            {content.description}
            </div>
            <footer>
                <p>Author: Ayuan | mohayuanzaaf06@gmail.com</p>
            </footer>
        </div>
    );
}

export default Profile;