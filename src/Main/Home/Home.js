import React from 'react';
import Banner from '../../component/Banner/Banner';
import Contact from '../../component/Contact/Contact';
import Footer from '../../component/Footer/Footer';

import Projects from '../../component/Projects/Projects';
import Skills from '../../component/Skills/Skills';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Skills/>
        <Projects></Projects>
            <Contact />
            <Footer></Footer>
      </div>
    );
};

export default Home;