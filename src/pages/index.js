import React from "react";
import { Link, graphql } from "gatsby";
import Image from "gatsby-image"

import Layout from "../components/layout";
import SEO from "../components/seo";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO />
        <h2>Articles</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article className="excerpt" key={node.fields.slug}>
              <div className="excerpt-thumbnail">
                <Image className="shadow-image" fixed={node.frontmatter.thumbnail.childImageSharp.fixed}/>
              </div>
              <div className="summary">
              <header>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt
                  }}
                />
              </section>
            </div>
            </article>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            thumbnail {
              childImageSharp {
                fixed(width: 250, height: 250, quality: 90) {
                  ...GatsbyImageSharpFixed
                }
              } 
            }
            title
            description
          }
        }
      }
    }
  }
`;
