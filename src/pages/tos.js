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

export default function TosPage() {
  const pageTitle = 'Terms Of Service'
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
          <i>Updated 01/28/2021</i>
        </p>

        <h4>Welcome!</h4>
        <p>
          Thank you for visiting Champion Lender, a brand of Champion Leads LLC.
          Our goal is to help you find a licensed professional to help you in
          your search for obtaining a loan or help with debt settlement or
          credit repair. Your Agreement By using our website, you are agreeing
          to these Terms of Use. You will not use our website for any purpose
          that is unlawful or in violation of these Terms of Use. You also agree
          to our Privacy Policy, which covers how we handle your personal
          information. From time to time, we may update these Terms of Use. When
          we do, we will post the date on this page. By continuing to use our
          site, you are agreeing to the updated Terms of Use.
        </p>

        <h5>What We Do.</h5>

        <p>
          We provide the tools so that you can search, compare, find a loan
          officer or credit repair/debt settlement agent. Think of us as an
          engine of information. If you find a plan on our site and decide to
          submit a request for a quote, we send your completed request to our
          network of loan officers and/or credit repair/debt settlement agents
          and connect you to them. Be sure to read the privacy and terms of use
          policy for the entity processing your policy membership.
        </p>

        <h5>Content Ownership</h5>

        <p>
          We (Champion Leads LLC) own our website and brand Champion Lender,
          information concerning us, and our services. This includes, without
          limitation, text, images, software, graphics, button icons, audio and
          video clips, digital downloads, data compilations, logos and
          information that appear on our website or are part of our services. We
          also own all copyrights, trademarks, service marks, and trade names
          related to us. We may present information on behalf of or licensed
          from a third party. We partner with Secure Rights dba LeadPoint and
          share all information with them and their partners along with our
          Premier Partners (see Premier Partners) This third-party information
          is proprietary to its owners. We welcome your questions, comments and
          feedback. Please remember that if you submit content to us, then you
          are legally representing that you have the right to do so. If you do
          not have permission, do not share information that is confidential or
          proprietary. By sending us your comments, you are granting us
          ownership to those materials, even if they include ideas to improve
          our site. We can share those ideas without your consent, we do not
          have to pay you for them, and we may already be considering them. If
          you prefer to retain your rights, please do not submit your material.
          If you believe the content on our site violates your copyright, please
          let us know by following the Copyright Procedure.
        </p>

        <h5>How to Use Our Website</h5>

        <p>
          Our website is your partner and a powerful tool. We encourage you to
          use our site–learn, explore, search, compare, select and get connected
          with a licensed loan officer or a credit repair/debt settlement agent.
          Your use, however, must be for personal, non-commercial purposes. In
          other words, our site is intended for individuals to compare and shop
          for themselves and their families only. You must also be at least 18
          years old or legally emancipated with the ability to enter into
          contracts. And, since our website is intended for a U.S. audience, if
          you’re visiting our site from another country, keep in mind that you
          will have to comply not just with U.S. law, but the laws of that
          country. The information that you provide to us must be accurate and
          up-to-date. Do not use our website to make false or fraudulent
          applications or purchases. Do not use programs to frame our site or
          impede our site operations. This includes technology like
          “deep-links,” “page-scrapes,” “robots,” and “spiders.” In addition,
          you are responsible for keeping your passwords, login and account
          information secret. Be Web Wise! And notify us immediately if you
          believe your account or information has been compromised.
        </p>

        <h5>Third Party Links</h5>

        <p>
          Sometimes our site includes links to third parties. While we hope that
          these sites are informative, we do not control their content.
          Including these links on our site is not a sign that we endorse or
          approve them.
        </p>

        <h5>Termination</h5>

        <p>
          Either of us can end this Agreement at any time. We may terminate your
          access to our site and services for any reason without prior notice.
          You can terminate by cancelling your account, unsubscribing to our
          emails, and stopping your use of our site. We will respect your
          request. If you have a pending debt settlement quote, however, we may
          be legally obligated to keep you updated on its status. Also, any
          provisions of these Terms of Use that would logically apply after
          termination, such as (but not limited to) Content Ownership and
          Disputes, will survive. Disputes You are our VIP and we hope that we
          become your go to debt settlement site. If a dispute does arise,
          however, then we each agree that the laws of the State of California,
          U.S.A., excluding its conflict of laws rules, will govern. If the
          dispute is not eligible for the JAMS Alternative Dispute Resolution
          process, then we each agree that the claims can only be litigated in
          the federal or state courts of San Diego County, California and we
          each agree to these courts’ personal jurisdiction. Disclaimer of
          Warranty and Limitation of Liability The law requires that we set out
          our disclaimer of warranty and limitation of liability in all caps.
          This section may be long and look boring, but it’s important. Please
          read it.
        </p>
        <p>
          YOU EXPRESSLY AGREE THAT USE OF OUR SITE IS AT YOUR SOLE RISK. THE
          MATERIAL PROVIDED ON THE SITE IS PROVIDED ON AN “AS IS” AND “AS
          AVAILABLE” BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM
          ALL WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
          WITHOUT LIMITATION, WARRANTIES OF TITLE, NONINFRINGEMENT, OR IMPLIED
          WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE WITH
          RESPECT TO THE WEBSITE, ANY USE OF THE WEBSITE AND ANY WEBSITE TO
          WHICH THE WEBSITE IS LINKED. WE WILL NOT BE LIABLE FOR ANY DAMAGES OF
          ANY KIND ARISING FROM THE USE OF THIS SITE, INCLUDING, BUT NOT LIMITED
          TO DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, AND CONSEQUENTIAL DAMAGES,
          EVEN IF WE ARE MADE AWARE OF THE POSSIBILITY OF SUCH DAMAGES. WE DO
          NOT WARRANT THAT THE MATERIAL ON THE WEBSITE IS COMPLETE OR ACCURATE,
          THAT USE OF THIS WEBSITE WILL BE UNINTERRUPTED OR ERROR FREE, OR THAT
          THIS WEBSITE OR SERVER OR ANY MATERIAL ON THIS WEBSITE IS FREE OF
          DISABLING DEVICES. CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON
          IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES.
          IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS,
          EXCLUSIONS, OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MIGHT HAVE
          ADDITIONAL RIGHTS.
        </p>

        <h5>Legal Jurisdictions</h5>
        <p>
          Only The sale of insurance products is governed by laws that differ
          from state to state. The products and services on our site are
          intended only for those persons in states and jurisdictions where
          these products and services may be legally sold. Nothing on our site
          shall be considered a solicitation to buy or an offer to sell any
          products or services to any person in any jurisdiction where such an
          offer, solicitation, purchase or sale would be unlawful. Access By
          using championlender.com, you warrant that you are at least 18 years
          of age and possess the legal authority to use championlender.com. We
          do not sell products to minors, but we sell them to adults.
        </p>

        <h5>Licenses</h5>
        <p>
          The championlender.com website is made available to you by licensed
          loan officers and/or credit repair/debt settlement agents in each
          respective state which require transactions to be conducted through a
          licensed loan officer or licensed credit repair/debt settlement agent.
          Champion Leads LLC is NOT a licensed loan officer nor credit repair/
          debt settlement agents rather we partner with several licensed lenders
          including Secure Rights dba LeadPoint. Any quotes, promises or
          guarantees our partners may give you is their sole responsibility and
          Champion Leads LLC and its brands cannot be held responsible for them.
        </p>
      </div>
    </StyledTosaPage>
  )
}
