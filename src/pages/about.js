import React from 'react'
import Seo from '../components/seo'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import PageBanner from '../components/PageBanner/PageBanner'

export default function AboutPage() {
  const pageTitle = 'About Us'
  const { bg } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { regex: "/cityscape/" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 2000
            webpOptions: { quality: 70 }
            jpgOptions: { quality: 60 }
          )
        }
      }
    }
  `)

  return (
    <div>
      <Seo title={pageTitle} />
      <PageBanner bgImage={getImage(bg)} title={pageTitle} />
    </div>
  )
}
