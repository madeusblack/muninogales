import React from 'react';
import Header from './header/Header';
import Footer from './Footer';
import MobileHeader from './header/MobileHeader';

const Layout = ({ children }) => (
  <>
    <MobileHeader />
    <Header />
    { children }
    <Footer />
  </>
);
export default Layout;
