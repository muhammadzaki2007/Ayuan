import React, { useState } from 'react';

function Home() {
  const [name, setName] = useState('');
  const [work, setWork] = useState('');

  // Fungsi untuk create data (POST)
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3005/api/cv/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, work }),
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
      const response = await fetch('http://localhost:3005/api/cv/update/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, work }),
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
      <h2 className='putih'>Dashboard Rumah</h2>
      
      <div className="form">
        <h3 className='putih'>Tambah atau Update Data</h3>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Work"
          value={work}
          onChange={(e) => setWork(e.target.value)}
        ></textarea>

        {/* Tombol untuk Create Data */}
        <button onClick={handleCreate}>Create</button>

        {/* Tombol untuk Update Data */}
        <button onClick={handleSubmit}>Update</button>
      </div>
    </div>
  );
};

export default Home;
