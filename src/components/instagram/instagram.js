import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Instagram = () => (
  <StaticQuery
    query={graphql`
      query InstagramPosts {
        allInstagramContent(limit: 12) {
          edges {
            node {
              link
              localImage {
                childImageSharp {
                  fluid(maxHeight: 500, maxWidth: 500 quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              images {
                standard_resolution {
                  width
                  height
                  url
                }
                low_resolution {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="insta-feed">
        <h2>Instagram</h2>
        <div style={{
        marginBottom: '1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
      }} >
          {data.allInstagramContent.edges.map((item, i) => (
            item.node.localImage ? (
              <div key={i}>
                <a
                  href={item.node.link}
                  target='_blank'
                  rel='noopener'
                  tabIndex='0'
                >
                <Image
                  fluid={item.node.localImage.childImageSharp.fluid}
                />
                </a>
              </div>
            ) : (<div></div>)
          ))}
        </div>
      </div>
    )}
  />
);

export default Instagram;
