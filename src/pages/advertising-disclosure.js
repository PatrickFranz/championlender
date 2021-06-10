import React from 'react'
import Seo from '../components/seo'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import PageBanner from '../components/PageBanner/PageBanner'
import styled from 'styled-components'

const StyledTosaPage = styled.div`
  .content-wrap {
    font-family: 'Montserrat';
    font-size: 15px;
    color: #666;
  }
`

export default function AdvertisingDisclosrePage() {
  const pageTitle = 'Advertising Disclosure'
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
    <StyledTosaPage>
      <Seo title={pageTitle} />
      <PageBanner bgImage={getImage(bg)}>
        <h1 className="heading">{pageTitle}</h1>
      </PageBanner>
      <div className="content-wrap">
        <p>
          We receive compensation from the financial institutions whose products
          and services appear on this site. This compensation may impact how and
          where products appear on the site, including the order in which they
          appear. This site does not include all financial products and offers
          from all financial institutions. You may not be matched with the
          partner making a particular conditional offer, and Champion Lender
          does not guarantee that any partner will make you a conditional offer.
          Champion Lender arranges for multiple conditional offers through its
          network of non-affiliated partners. See the Terms of Use Agreement for
          more details. The Terms of Use Agreement governs these advertised
          Terms and Information. Interest rates and terms are from a partner or
          partners with whom Champion Lender may match you and that offer the
          particular product. The disclosures are current as of the date
          indicated. Champion Lender is not a lender in any transaction and does
          not make loans, insurance, offers, commitments or lock-rates. All
          credit decisions, including approval and the conditional rates and
          terms you are offered, are the responsibility of the participating
          partner and will vary based upon your request, your particular
          financial situation, and criteria determined by the partner to whom
          you are matched. Not all consumers will qualify for the advertised
          rates and terms.
        </p>
      </div>
    </StyledTosaPage>
  )
}
