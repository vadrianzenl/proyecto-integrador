import React from 'react';
import Preloader from '../preloader';

const Layout  = ({ children }) => {
  return (
    <>
      <Preloader />
      {children}
    </>
  );
};

export default Layout;