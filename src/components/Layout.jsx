import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileHeader from './MobileHeader';

const Layout = ({ children }) => (
  <>
    <MobileHeader />
    <Header />
    { children }
    <Footer />
  </>
);
export default Layout;
