import React from 'react';
import { Container } from 'react-bootstrap';
import Main from './Main';
import WhyUS from './WhyUs';
import HowItWorks from './HowItWorks';
import Footer from './Footer';

const Home = () => {
  return (
    <main>
      <Main />
      <Container>
        <WhyUS />
        <HowItWorks />
      </Container>
      <Footer />
    </main>
  );
};

export default Home;
