import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Nav from "../components/nav";
import './blog.css';

export const query = graphql`
query BlogTemplate($id: String!) {
  contentfulBlog(id: {eq: $id}) {
    title
    id
    slug
    content {
      childMarkdownRemark {
        html
      }
    }
    seoTitle
    seoDescription
    seoAuthor
    seoKeywords
    seoImage {
      fluid(maxWidth: 1200, quality: 100) {
        ...GatsbyContentfulFluid
        src
      }
    }
    featuredImage {
      fluid(maxWidth: 1200, quality: 100) {
        ...GatsbyContentfulFluid
        src
      }
    }
  }
}`

const BlogTemplate = (props) => {
  return (
    <Layout>
      <SEO title={props.data.contentfulBlog.seoTitle} description={props.data.contentfulBlog.seoDescription} keywords={props.data.contentfulBlog.seoKeywords} />
      <Nav />
      <div className="blog-header">
        <div className="blog-image" style={{backgroundImage: `url(${props.data.contentfulBlog.featuredImage.fluid.src})`}}></div>
        <div className="blog-title">
          <h1 className="blog-title__text">{props.data.contentfulBlog.title}</h1>
        </div>
      </div>
      <div className="blog-wrapper">
        <div className="blog-content">
          <div dangerouslySetInnerHTML={
            {__html: `${props.data.contentfulBlog.content.childMarkdownRemark.html}`}
          } />
        </div>
      </div>
    </Layout>
  )
};

export default BlogTemplate;
