import React from 'react';

const Header = () => {

  const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  }

  return (
    <header style={headerStyle}>
      <h1>Việc cần làm</h1>
    </header>
  )
}

export default Header;