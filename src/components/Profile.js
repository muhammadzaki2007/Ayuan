import React, { useState, useEffect } from 'react';
// import Navigation from './Navigation';
import './Style.css';  // Import CSS buat styling
import { Link } from "react-router-dom";

const Profile = () => {
  const [content, setContent] = useState({ overview: '' });

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://localhost:3005/api/view/get'); // Ganti path jadi /get
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
                <button>Overview</button>
                <button><Link to="/About">About Me</Link></button>
                <button><Link to="/Skill">Skill&Pengalaman</Link></button>
            </nav>
            <div className="profile">
            {content.overview}
            </div>
            <div className="profile">
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold' }}>Nama</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>M Ayuan Zahril Afifi</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold' }}>Tempat, Tanggal Lahir</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Kendal, 20 Desember 2006</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold' }}>Alamat</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sempu 03/01 Sukorejo, Kab. Kendal</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold' }}>Riwayat Pendidikan</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <ul style={{ margin: '0', paddingLeft: '20px' }}>
                <li>SDN 2 Selokaton (2013-2019)</li>
                <li>SMPN 2 Sukorejo (2019-2022)</li>
                <li>SMK Muhammadiyah 04 Sukorejo (2022-Sekarang)</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>


            </div>
            <footer>
                <p>Author: Ayuan | mohayuanzaaf06@gmail.com</p>
            </footer>
        </div>
    );
}

export default Profile;