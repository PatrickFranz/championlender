import * as React from 'react'
import Heading from '../components/Heading'
import Hero from '../components/Hero/hero'
import HeroFooterBar from '../components/Hero/heroFooterBar'
import About from '../components/Sections/About'
import Debt from '../components/Sections/Debt'
import Homes from '../components/Sections/Homes'
import PartnerUp from '../components/Sections/PartnerUp'
import Process from '../components/Sections/Process'

import Seo from '../components/seo'

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Hero />
    <HeroFooterBar />
    <Heading
      heading="Tap Into Our Network Of Lenders For Your Home"
      seperator={true}
    />
    <Homes />

    <Heading heading="Get Help With Your Debt" seperator={true} />
    <Debt />
    <Process />
    <About />
    <PartnerUp />
  </>
)

export default IndexPage
