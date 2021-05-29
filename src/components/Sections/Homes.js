import { faHome, faSearch, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import ImageCard from '../ImageCard'

const StyledHomesSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 50px;

  @media (max-width: 480px) {
    margin: 0 5px;
  }
`
export default function Homes() {
  const { mortgage, reverse, homeSearch } = useStaticQuery(graphql`
    query {
      mortgage: file(relativePath: { regex: "/mortgage-loans/" }) {
        id
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      reverse: file(relativePath: { regex: "/reverse-mortgage/" }) {
        id
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      homeSearch: file(relativePath: { regex: "/home-search/" }) {
        id
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)
  return (
    <StyledHomesSection>
      <ImageCard
        image={<GatsbyImage image={getImage(mortgage)} alt="" />}
        title="Mortgage Loans"
        glyph={<FontAwesomeIcon icon={faHome} />}
      />
      <ImageCard
        image={<GatsbyImage image={getImage(reverse)} alt="" />}
        title="Reverse Mortgage"
        glyph={<FontAwesomeIcon icon={faSyncAlt} />}
      />
      <ImageCard
        image={<GatsbyImage image={getImage(homeSearch)} alt="" />}
        title="Home Search"
        glyph={<FontAwesomeIcon icon={faSearch} />}
      />
    </StyledHomesSection>
  )
}
