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
  const pageTitle = 'Privacy'
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
        <p>
          This privacy policy applies to https://www.championlender.com, ​a
          Brand owned and operated by Champion Lender, LLC (hereinafter referred
          to as “Champion Lender or “Site”). We share our information with our
          Premier Partners (see premier partner list) and all information
          submitted is shared with Secure Rights DBA LeadPoint. This privacy
          policy describes how Champion Lender collects and uses the personal
          information you provide on our website:
          https://www.championlender.com. It also describes the choices
          available to you regarding our use of your personal information and
          how you can access and update this information.
        </p>
        <h4>FACTS</h4>
        <br />
        <h5>
          WHAT DOES CHAMPION LENDER, LLC DO WITH YOUR PERSONAL INFORMATION?
        </h5>
        <p>
          Financial companies choose how they share your personal information.
          Federal law gives consumers the right to limit some, but not all
          sharing. Federal law also requires us to tell you how we collect,
          share, and protect your personal information. Please read this notice
          carefully to understand what we do.
        </p>
        <h5>What?</h5>
        <p>
          The types of personal information we collect and share depend on the
          product or service you have with us. This information can include:
          Contact Information such as name and email address. Unique Identifiers
          such as: user name, account number, password. demographic information
          such as:
        </p>
        <p>
          <ul>
            <li>Age</li>
            <li>Zip Code</li>
            <li>Social Security Number</li>
            <li>Employment Information</li>
            <li>Account Balances</li>
            <li>Transaction History</li>
            <li>Credit History</li>
            <li>Assets</li>
          </ul>
        </p>
        <h5>Why?</h5>
        <p>
          We use this information to:
          <ul>
            <li>Administrator your account</li>
            <li>Respond tocustomer service requests</li>
            <li>Provide the financial services you requested</li>
            <li>Respond to your questions and concerns</li>
            <li>Improve our website and marketing efforts</li>
            <li>Conduct research and analysis</li>
          </ul>
        </p>
        <h5>How?</h5>
        <p>
          All financial companies need to share customers’ personal information
          to run their everyday business. In the section below, we list the
          reasons financial companies can share their customers’ personal
          information; the reasons Champion Lender, Secure Rights and Premier
          Partners choose to share; and whether you can limit this sharing. We
          will share your personal information with third parties only in the
          ways that are described in this privacy policy. We do not sell your
          personal information to third parties.
        </p>
        <p>Reasons we can share your personal information</p>
        <p>
          In certain situations, Champion Lender LLC, Secure Rights and Premier
          Partners may be required to disclose personal data in response to
          lawful requests by public authorities, including to meet national
          security or law enforcement requirements. For our everyday business
          purposes – such as to process your transactions, maintain your
          account(s), as required by law, such as to respond to court orders and
          legal investigations, similar legal process or report to credit
          bureaus and when we believe in good faith that disclosure is necessary
          to protect our rights, protect your safety or the safety of others,
          investigate fraud, or respond to a government request. If Champion
          Lender LLC is involved in a merger, acquisition, or sale of all or a
          portion of its assets, you will receive a prominent notice on our Web
          site of any change in ownership or uses of your personal information,
          as well as any choices you may have regarding your personal
          information.
        </p>
        <h5>Frequently Asked Questions</h5>
        <i>
          Does Champion Lender LLC, Secure Rights and Premier Partners Share?
        </i>
        <p>Yes</p>
        <i>Can you limit this sharing?</i>
        <p>Yes</p>
        <p>
          Call 800-957-3710 – our menu will prompt you through your choice(s)
          Please note:cIf you are a new customer, we can begin sharing your
          information 30 days from the date we sent this notice. However, you
          can contact us at any time to limit our sharing.
        </p>
        <p>
          Service Providers – We may provide your personal information to
          companies that provide services to help us with our business
          activities such as shipping your order or offering customer service.
          These companies are authorized to use your personal information only
          as necessary to provide these services to us.
        </p>
        <h5>Questions?</h5>
        <p>Contact us on the contact information listed below:</p>
        <p>
          Champion Lender LLC <br />
          6900 Tavistock Lakes Blvd Suite 400 <br />
          Orlando, FL, 32827
          <br />
          info@championlender.com
          <br />
          Call 800-957-3710
        </p>

        <h5>Who We Are? Who is providing this notice?</h5>
        <p>
          Champion Lender, LLC, a California limited liability company that may
          use the name “Champion Lender.”
        </p>
        <h5>
          What do we do? How does Champion Lender protect my personal
          information?
        </h5>
        <p>
          To protect your personal information from unauthorized access and use,
          we use security measures that comply with federal law. These measures
          include computer safeguards and secured files and buildings. When you
          enter sensitive information (such as Social Security number) and any
          personal information on our Site, we encrypt the transmission of that
          information using secure socket layer technology (SSL). We follow
          generally accepted standards to protect the personal information
          submitted to us, both during transmission and once we receive it.
          However, no method of transmission over the Internet, or method of
          electronic storage, is 100% secure. Therefore, we cannot guarantee
          absolute security. If you have any questions about security on our
          website, you can contact us at info@thedebtchampions.com.
        </p>
        <h5>How does Champion Lender collect my personal information?</h5>
        <p>
          We collect your personal information, for example, when you:
          <ul>
            <li>Open an account with us or give us your account information</li>
            <li>Provide employment info or provide account information</li>
            <li>Give us your contact info</li>
            <li>
              We may also collect your personal information from others, such as
              credit bureaus, affiliates or other companies.
            </li>
          </ul>
        </p>
        <h5>Why can’t I limit all sharing?</h5>
        <p>
          Federal law gives you the right to limit only sharing for affiliates’
          everyday business purposes —information about your creditworthiness.
          Affiliates from using your information to market to you. Sharing for
          non-affiliates to market to you state laws and individual companies
          may give you additional rights to limit sharing. See ‘Other Important
          Information’ section.
        </p>
        <h5>Tracking Technologies</h5>
        <p>
          Champion Lender and its partners use cookies or similar technologies
          to analyze trends, administer the website, track users’ movements
          around the website, and to gather demographic information about our
          user base as a whole. You can control the use of cookies at the
          individual browser level, but if you choose to disable cookies, it may
          limit your use of certain features or functions on our website or
          service.
        </p>
        <h5>Passive Collection</h5>
        <p>
          As is true of most websites, we gather certain information
          automatically. This information may include Internet protocol (IP)
          addresses, browser type, Internet service provider (ISP),
          referring/exit pages, the files viewed on our site (e.g., HTML pages,
          graphics, etc.), operating system, date/time stamp, and/or clickstream
          data to analyze trends in the aggregate and administer the site.
        </p>
        <h5>Behavioral Targeting</h5>
        <p>
          Notwithstanding any other provision, we may also engage a third party
          partner for the purpose of recognizing users and delivering to them
          interest-based content and advertisements. We may share information
          about you with our partners such as your name, postal address, email,
          device ID, or other identifier in encrypted, hashed or de-identified
          form. Our partners also may collect information from you, such as your
          IP address and information about your browser or operating system; may
          combine our personal and non-personal offline information about you
          with information from other partners in data sharing cooperatives in
          which we participate; and may place or recognize a unique cookie on
          your browser. These cookies contain no personally identifiable
          information; they may contain demographic or other data in
          de-identified form. To opt-out of third party cookies, please go to:
          Digital Advertising Alliance’s consumer choice page.
        </p>
        <h5>How can I correct, update and delete my personal information?</h5>
        <p>
          Upon request, Champion Lender will provide you with information about
          whether we hold any of your personal information. If your personal
          information changes, or if you no longer desire our service, you may
          correct, update, amend, delete/remove, by making the change on our
          member information page or by emailing our Customer Support at
          info@thedebtchampions.com We will respond to your request within a
          reasonable timeframe.
        </p>
        <h5>Data retention</h5>
        <p>
          We will retain your information for as long as your account is active
          or as needed to provide you services. We will retain and use your
          information as necessary to comply with our legal obligations, resolve
          disputes, and enforce our agreements.
        </p>
        <h5>Changes To This Policy</h5>
        <p>
          We may update this privacy policy to reflect changes to our
          information practices. If we make any material changes we will notify
          you by email (sent to the e-mail address specified in your account) or
          by means of a notice on this Site prior to the change becoming
          effective. We encourage you to periodically review this page for the
          latest information on our privacy practices.
        </p>
        <h5>Affiliates</h5>
        <p>
          Companies related by common ownership or control. They can be
          financial and non-financial companies. Our affiliates include Secure
          Rights DBA LeadPoint, Freedom Debt Relief, LLC, Freedom Financial
          Asset Management, LLC and Freedom Tax Relief, LLC and Premier Partners
          (see ‘Premier Partners’ for list).
        </p>
        <h5>Non-affiliates</h5>
        <p>
          Companies not related by common ownership or control. They can be
          financial and non-financial companies. We share with non affiliates in
          the categories of credit counseling agencies, loan broker and other
          financial service providers, insurance companies, mortgage providers
          and broker/dealers, solar, or debt settlement.
        </p>
        <h5>Joint marketing</h5>
        <p>
          A formal agreement between non-affiliated financial companies that
          together market financial products or services to you. We have no
          joint marketing partners. For other important information see below
          for additional state-specific disclosures.
        </p>
        <h5>Links to 3rd Party Sites</h5>
        <p>
          Our Site includes links to other websites whose privacy practices may
          differ from those of www.championlender.com. If you submit personal
          information to any of those sites, your information is governed by
          their privacy policies. We encourage you to carefully read the privacy
          policy of any Web site you visit.
        </p>
        <h5>Social Media Widgets</h5>
        <p>
          Our Site includes social media features, such as the Facebook “like”
          button and widgets, such as the “share” button or interactive
          mini-programs that run on our site. These features may collect your IP
          address, which page you are visiting on our site, and may set a cookie
          to enable the feature to function properly. Social media features and
          widgets are either hosted by a third party or hosted directly on our
          Site. Your interactions with these features are governed by the
          privacy policy of the company providing it.
        </p>
        <h5>Single Sign-On</h5>
        <p>
          You can log in to our Site using sign-in services such as Facebook
          Connect or an Open ID provider. These services will authenticate your
          identity and provide you the option to share certain personal
          information with us such as your name and email address to
          pre-populate our sign up form. Services like Facebook Connect give you
          the option to post information about your activities on this Web site
          to your profile page to share with others within your network.
        </p>
        <h5>Newsletter</h5>
        <p>
          Out of respect for your privacy, you may choose to stop receiving our
          newsletter or marketing emails by following the unsubscribe
          instructions included in these emails, accessing the email preferences
          in your account settings page or you can contact us at
          info@championlender.com.
        </p>
        <h5>Blog</h5>
        <p>
          Our Site offers publicly accessible blogs or community forums. You
          should be aware that any information you provide in these areas may be
          read, collected, and used by others who access them. To request
          removal of your personal information from our blog or community forum,
          contact us at info@championlender.com. In some cases, we may not be
          able to remove your personal information, in which case we will let
          you know if we are unable to do so and why.
        </p>
        <h5>Public Profiles</h5>
        <p>
          The profile you create on our site will be publicly accessible unless
          otherwise indicated. You may change the privacy settings of your
          profile through your account portal or you can contact us at :
          info@championlender.com.
        </p>
        <p>
          FOR CALIFORNIA RESIDENTS: In accordance with California law, we will
          not share information we collect about you with non affiliates, except
          as allowed by law. For example, we may share information with your
          consent or to service your accounts. Among our affiliates, we will
          limit information sharing to the extent required by California law.
          You can also limit our sharing for joint marketing with other
          financial institutions. See the accompanying “Important Privacy
          Choices for Consumers — Additional Rights for California Residents.”
        </p>
        <p>
          FOR NEVADA RESIDENTS: We are providing you this notice pursuant to
          state law. You maybe placed on our internal “do not call” list by
          calling 8005447211. Nevada law requires that we also provide you with
          the following contact information: Bureau of Consumer Protection,
          Office of the Nevada Attorney General, 555E. Washington St. — Suite
          3900, Las Vegas, NV89101; 702-486-3132 — BCPINFO@ag.state.nv.us.
        </p>
        <p>
          FOR VERMONT RESIDENTS: In accordance with Vermont law, we will not
          share information we collect about Vermont residents with companies
          who are not affiliates, except as permitted by law, such as with your
          consent or to service your accounts. We will not share information
          about your credit worthiness with our affiliates without your
          authorization or consent but we may share information about our
          transactions or experiences with your with our affiliates without your
          consent.
        </p>
        <p>Copyright © {new Date().getFullYear()} Champion Lender</p>
      </div>
    </StyledTosaPage>
  )
}
