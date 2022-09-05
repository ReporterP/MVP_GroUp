import React from 'react';
import Logo from '../main/UI/Logo';

const Header = props => {

  var headerStyle = {
    position: props.post?"fixed":"unset"
  }

  return (
    <div>
      <header style={headerStyle}>
        <Logo/>
      </header>
    </div>
  );
}

export default Header;
