import React from 'react';
import './Admin.css';
import { Link } from "react-router-dom";

const Sidebar = () => {
 

  return (
   <div className='sidebar'>
        <div className="sidebar-content">
          <h2>Edit disini</h2>
          <ul>
            <li><Link to={'/admin'}>Home</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/konten'>Edit Content</Link></li>
          </ul>

          <ul className="bottom-link">
            <li><Link to="/">Back to web</Link></li>
          </ul>
        </div>
        </div>
      

  );
};

export default Sidebar;
