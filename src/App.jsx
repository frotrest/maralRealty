import React from 'react';
import { useAnimateOnScroll } from './components/AnimateWatcher';
import Header from './components/Header/Header';
import Hero from './components/Main/Hero/Hero';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  useAnimateOnScroll();
  return (
    <>
      <Header>
        <Hero />
      </Header>
      <Main />
      <Footer />
    </>
  );
}

export default App;
