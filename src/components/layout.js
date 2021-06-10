import React from 'react'
import styled from 'styled-components'
import Footer from './Footer/footer'
import HeaderNav from './Nav/headerNav'

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
