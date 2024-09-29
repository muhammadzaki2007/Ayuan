import React, { useState, useEffect } from 'react';
// import Navigation from './Navigation';
import './Style.css';  // Import CSS buat styling
import { Link } from "react-router-dom";

const Card = () => {
    const [content, setContent] = useState({ name: '', work: '' });

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://localhost:3005/api/cv/get'); // Ganti path jadi /get
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
                <button>Home</button>
                <button className="btn btn-neutral-content">
                    <Link to="/Profile">Overview</Link>
                  </button>
                <button><Link to="/About">About Me</Link></button>
                <button><Link to="/Skill">Skill&Pengalaman</Link></button>
            </nav>
            <div className="profile">
                <img src="https://i.pinimg.com/originals/cf/6a/bf/cf6abfbae465bd48d4f10efbd33534e1.jpg" alt="Profile" />
                <h2>{content.name}</h2>
                <h3>{content.work}</h3>
            </div>
            <footer>
                <p>Author: Ayuan | mohayuanzaaf06@gmail.com</p>
            </footer>
        </div>
    );
}

export default Card;
