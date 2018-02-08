import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <h3>Welcome to your new Gatsby site.</h3>
    <p>Now go build something great.</p>
    <ol>
      <li><Link to="/page-2/">Go to page 2</Link></li>
      <li><Link to="/sleeve/"> Go to the sleeve page </Link></li>
      <li><Link to="/counter/"> Counter page </Link></li>
    </ol>
    
    <h2>Index</h2>
    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li>
          <Link 
            key={post.node.id}
            to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
          }
        }
      }
  	}
  }
`

export default IndexPage
