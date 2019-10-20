import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const meta = this.props.data.site.siteMetadata;
    const siteTitle = meta.title;
    const img = post.frontmatter.thumbnail.childImageSharp.fluid;

    // og:images must be absolute paths
    const imgLoc = `${meta.siteUrl}${img.src}`;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          meta={[{
                property: 'og:image',
                content: imgLoc
            }, {
                property: 'og:image:width',
                content: img.presentationWidth,
            }, {
                property: 'og:image:height',
                content: img.presentationHeight,
            }, {
                property: 'og:url',
                content: `${meta.siteUrl}${post.fields.slug}`
            }]}
        />
        <article>
          <header>
            <h1
              style={{
                marginBottom: 0
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p>{post.frontmatter.date}</p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 627, quality: 90) {
              presentationWidth
              presentationHeight
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
