import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Hero() {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "hero1.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [PNG, WEBP])
        }
      }
    }
  `)
  console.log(logo)
  return <GatsbyImage image={logo.childImageSharp.gatsbyImageData} />
}
