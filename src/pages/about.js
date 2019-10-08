import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Nav from '../components/nav';
import SEO from '../components/seo';
import AboutMe from '../components/about';

const About = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Nav />
    <AboutMe />
  </Layout>
)

export default About;





