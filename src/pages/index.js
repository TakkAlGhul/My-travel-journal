import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Nav from "../components/nav";
import Featured from "../components/featured";
import Home from "../components/home";
import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Nav />
    <Featured />
    <h2 className="wrapper__title">Recent Posts</h2>
    <Home />
    <Link to='/blog' className="more">More Articles</Link>
  </Layout>
)

export default IndexPage;
