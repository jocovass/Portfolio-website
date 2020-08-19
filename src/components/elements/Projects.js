import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Project from '../../templates/Project'

const StyledProjects = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(1, minmax(23rem, 1fr));
  grid-gap: 2rem 0.5rem;
  justify-content: center;
  justify-items: center;
  @media ${({ theme }) => theme.mq.medium} {
    grid-template-columns: repeat(2, minmax(23rem, 1fr));
  }
  @media ${({ theme }) => theme.mq.large} {
    grid-template-columns: repeat(3, minmax(23rem, 1fr));
  }
`

const Projects = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          extension: { eq: "md" }
          relativeDirectory: { regex: "/projects/" }
        }
        sort: { fields: [dir], order: DESC }
      ) {
        edges {
          node {
            childMarkdownRemark {
              html
              htmlAst
              frontmatter {
                title
                live
                source
                image {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 75) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <StyledProjects>
      {edges.map((edge, i) => {
        return <Project item={edge.node.childMarkdownRemark} key={i} />
      })}
    </StyledProjects>
  )
}

export default Projects
