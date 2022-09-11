import React from 'react';
import Logo from '../main/UI/Logo';

const Header = props => {

  var headerStyle = {
    position: props.post?"fixed":"unset"
  }

  return (
    <header style={headerStyle}>
      <Logo/>
    </header>
  );
}

export default Header;
