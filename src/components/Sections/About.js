import React from 'react'
import Heading from '../Heading'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

const StyledAboutSection = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 50px;
  margin: 70px 200px;

  @media (max-width: 1024px) {
    padding: 0 5px;
    align-items: center;
    margin: 10px 5px;
    gap: 20px;
  }

  .image {
    min-width: 350px;
    flex: 1;
  }
  .text {
    min-width: 350px;
    flex: 1;

    p {
      font-family: 'Montserrat';
      font-weight: 400;
      font-size: 15px;
      color: #666;
      letter-spacing: 0px;
      font-style: normal;
    }

    p.headline {
      font-weight: 400;
    }
  }
`

export default function About() {
  const { us } = useStaticQuery(graphql`
    query {
      us: file(relativePath: { regex: "/about-us.png/" }) {
        id
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, width: 500)
        }
      }
    }
  `)
  return (
    <StyledAboutSection>
      <div className="image">
        <GatsbyImage image={getImage(us)} alt="Hardworking professionals" />
      </div>
      <div className="text">
        <Heading
          superHeading="About Champion Lender"
          heading="What Does Champion Lender Do?"
          align="left"
          width="90%"
          margin="0 0 20px"
        />
        <p className="headline">
          <strong>
            Champion Lender helps you get the best possible deal on any kind of
            loan, period.
          </strong>
        </p>
        <p>
          By giving you multiple offers from several lenders in little more than
          a few minutes, we minimize the time and trouble of shopping for rates
          and terms. We optimize lender competitiveness by offering you this
          shortcut.
        </p>
        <p>
          Regardless of your needs, whether you are a first time home buyer or
          looking to refinance an existing debt we’ve got you covered. Champion
          Lender is a leading source of lending opportunities with one of the
          largest networks in the nation.
        </p>
      </div>
    </StyledAboutSection>
  )
}
