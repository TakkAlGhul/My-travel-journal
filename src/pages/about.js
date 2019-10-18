import React from 'react';
import Layout from '../components/layout';
import Navigations from '../components/nav/navigations';
import SEO from '../components/seo';
import AboutMe from '../components/about';
import Footer from '../components/Footer';

const About = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Navigations />
    <AboutMe />
    <Footer />
  </Layout>
)

export default About;





