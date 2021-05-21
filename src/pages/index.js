import * as React from 'react'
import Header from '../components/header'
import Hero from '../components/hero'

import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header />
    <Hero />
  </Layout>
)

export default IndexPage
