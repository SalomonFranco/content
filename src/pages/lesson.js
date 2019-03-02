import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const post = data.allMarkdownRemark.edges.map(({node}, key)=>{
    if(node.fields.type === "lesson"){
      return (
        <div className="col-md-4" key={key}>
          <Link to={node.fields.url}>
            <h3>{node.frontmatter.title}{" "}</h3>
          </Link>
            <p>{node.excerpt}</p>
        </div>
      );
    }
    return '';
  });

  return (
      <div>
        <h1>Publicaciones para Courses</h1>
        <div className="row">
          { post }
        </div>
      </div>
  );
};

export const query = graphql`
  query MyQueryLesson{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
            url
            type
          }
          excerpt
        }
      }
    }
  }
`;