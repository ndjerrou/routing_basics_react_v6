import React from 'react';
import { Link } from 'react-router-dom';

function UserPage() {
  return (
    <div className='App'>
      <Link to='/users/1'>Paul</Link>
      <Link to='/users/2'>Marc</Link>
      <Link to='/users/3'>Jacques</Link>
    </div>
  );
}

export default UserPage;
