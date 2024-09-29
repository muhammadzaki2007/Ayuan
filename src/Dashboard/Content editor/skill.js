import React, { useState } from 'react';
import './edit.css';

const Home = () => {
  const [skill, setSkill] = useState('');
  const [pengalaman, setPengalaman] = useState('');
  const [rumahList, setRumahList] = useState([]);

  const handleAdd = () => {
    setRumahList([...rumahList, { skill, pengalaman }]);
    setSkill('');
    setPengalaman('');
  };

  return (
    <div className="dashboard-rumah">
      <h2 className='putih'>Dashboard SkillPengalaman</h2>
      
      <div className="form">
        <h3 className='putih'>Tambah Data</h3>
        <input
          type="text"
          placeholder="Skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <textarea
          placeholder="Pengalaman"
          value={pengalaman}
          onChange={(e) => setPengalaman(e.target.value)}
        ></textarea>
        <button onClick={handleAdd}>Add</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Skill</th>
            <th>pengalaman</th>
          </tr>
        </thead>
        <tbody>
          {rumahList.map((rumah, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{rumah.name}</td>
              <td className='putih'>{rumah.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
