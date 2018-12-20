import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => (
  <header id="header">
    {children}
  </header>
);

Header.defaultProps = {
  children: 'MskBook',
};
Header.propTypes = {
  children: PropTypes.string,
};
export default Header;
