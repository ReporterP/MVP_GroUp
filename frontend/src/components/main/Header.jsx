import React from 'react';
import Logo from '../main/UI/Logo';

const Header = props => {

  var headerStyle = {
    position: props.post?"fixed":"unset"
  }

  return (
    <header style={headerStyle}>
      <div className="container">
        <Logo/>
      </div>
    </header>
  );
}

export default Header;
