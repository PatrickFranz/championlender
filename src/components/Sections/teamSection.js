import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import Heading from '../Heading'

const StyledTeamCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  min-width: 200px;

  &:hover .gatsby-image-wrapper {
    transform: scale(1.05);
  }

  .gatsby-image-wrapper {
    transition: all 250ms ease-in-out;
  }

  .name {
    font-size: 1.25rem;
  }

  .title {
    font-size: 0.75rem;
  }

  &:first-child {
    flex-grow: 1;
    min-width: 100%;
    .gatsby-image-wrapper {
      max-width: 200px;
      min-width: 200px;
    }
  }
  &:not(:first-child) {
    flex: 1;
  }
  .gatsby-image-wrapper {
    border-radius: 50%;
  }
  p {
    font-weight: bold;
    margin: 0;
  }
`
const StyledMemberGrid = styled(Col)`
  .member-grid {
    align-items: center;
    justify-content: center;
    gap: 75px;
    margin: 50px 200px;
    padding: 5px;

    @media (max-width: 1190px) {
      gap: 50x;
      margin: 50px;
    }
    @media (max-width: 768px) {
      gap: 50x;
      margin: 25px;
    }
  }
`

export default function TeamSection() {
  const teamImages = useStaticQuery(graphql`
    query {
      placeholder: file(relativePath: { regex: "/headshot/" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      viola: file(relativePath: { regex: "/viola/" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      luke: file(relativePath: { regex: "/luke/" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      katia: file(relativePath: { regex: "/katia/" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      brittney: file(relativePath: { regex: "/brittney/" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      jonalynn: file(relativePath: { regex: "/jonalynn/" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      patrick: file(relativePath: { regex: "/patrick/" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      emily: file(relativePath: { regex: "/emily/" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      richard: file(relativePath: { regex: "/richard/" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      jaimzi: file(relativePath: { regex: "/jaimzi/" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      dominique: file(relativePath: { regex: "/dominique/" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      salty: file(relativePath: { regex: "/salty/" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const teamMembers = [
    {
      name: 'Viola Carmona',
      title: 'CEO, Founder',
      image: teamImages.viola.childImageSharp.gatsbyImageData,
    },
    {
      name: 'Dominique Taylor',
      title: 'Operations Manager',
      image: teamImages.dominique.childImageSharp.gatsbyImageData,
    },
    {
      name: 'Jaimzi Neill',
      title: 'Executive Assistant',
      image: teamImages.jaimzi.childImageSharp.gatsbyImageData,
    },
    {
      name: 'Katia Mejia',
      title: 'Business Development Manager',
      image: teamImages.katia.childImageSharp.gatsbyImageData,
    },
    {
      name: 'Richard Branden',
      title: 'Business Development Manager',
      image: teamImages.richard.childImageSharp.gatsbyImageData,
    },
    {
      name: 'Brittney Jones ',
      title: 'Call Center Agent',
      image: teamImages.brittney.childImageSharp.gatsbyImageData,
    },
    {
      name: 'Emily Foxworth',
      title: 'Business Development Manager',
      image: teamImages.emily.childImageSharp.gatsbyImageData,
    },
    {
      name: 'Luke Gartland',
      title: 'Tech Manager',
      image: teamImages.luke.childImageSharp.gatsbyImageData,
    },
    {
      name: 'Jonalynn Masters',
      title: 'Integrations Specialist',
      image: teamImages.jonalynn.childImageSharp.gatsbyImageData,
    },
    {
      name: 'Patrick Franz',
      title: 'Web Developer',
      image: teamImages.patrick.childImageSharp.gatsbyImageData,
    },
  ]

  return (
    <StyledMemberGrid>
      <Heading heading="Our Team" />
      <Row className="member-grid">
        {teamMembers.map((member, idx) => {
          return (
            <StyledTeamCard key={idx}>
              <GatsbyImage
                image={member.image}
                alt={member.name}
                placeholder="blurred"
              />
              <p className="name">{member.name}</p>
              <p className="title">{member.title}</p>
            </StyledTeamCard>
          )
        })}
      </Row>
    </StyledMemberGrid>
  )
}
