import React from 'react';
const handleSubmit = async e => {
  e.preventDefault();

  console.log('eliminar token');

}
export default function Dashboard() {
  return(
    <div className="login-wrapper">
      <h2>Dashboard</h2>
      <form onSubmit={handleSubmit}>
          <div>
            <button type="submit">Signout</button>
          </div>
      </form>
    </div>
  );
}