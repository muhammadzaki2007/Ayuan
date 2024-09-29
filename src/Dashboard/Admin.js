import React from 'react';
import './Admin.css';  // Import CSS buat styling
import Sidebar from './sideBar';
import Header from './Header';

const admin = () => {
    return (
        <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
      <b className='putih'>Pilih Dashboard untuk melihat preview dan Pilih edit Content untuk mengedit</b>
      </div>
    </div>
    
    );
}

export default admin;
