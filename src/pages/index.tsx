import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Writing from '../sections/Writing';
import Footer from '../components/Footer';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Education from '../sections/Education';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Education />
    <Experience />
    <Skills />
    <Projects />
    {/* <Writing /> */}
    <Footer />
  </Layout>
);

export default IndexPage;
