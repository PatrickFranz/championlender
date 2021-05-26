import React from 'react'
import styled from 'styled-components'
import Footer from './footer'
import HeaderNav from './headerNav'

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <HeaderNav />
      {children}
      <Footer />
    </StyledLayout>
  )
}

export default Layout
