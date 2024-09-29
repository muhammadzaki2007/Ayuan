import React, { useState } from 'react';

function Home() {
  const [overview, setView] = useState('');

  // Fungsi untuk create data (POST)
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3005/api/view/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ overview }),
      });
      if (response.ok) {
        alert('Content created successfully');
      } else {
        alert('Failed to create content');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Fungsi untuk update data (PUT)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3005/api/view/update/5', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ overview }),
      });
      if (response.ok) {
        alert('Content updated successfully');
      } else {
        alert('Failed to update content');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="dashboard-rumah">
      <h2 className='putih'>Dashboard Overview</h2>
      
      <div className="form">
        <h3 className='putih'>Tambah atau Update Data</h3>
        <input
          type="text"
          placeholder="Overview"
          value={overview}
          onChange={(e) => setView(e.target.value)}
        />
        
        {/* Tombol untuk Create Data */}
        <button onClick={handleCreate}>Create</button>

        {/* Tombol untuk Update Data */}
        <button onClick={handleSubmit}>Update</button>
      </div>
    </div>
  );
};

export default Home;
