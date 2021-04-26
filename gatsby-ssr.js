import Layout from "./src/components/layout.js"
import { GlobalStyle } from "./src/styles/GlobalStyle.js"
import React from "react"

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout>
      <GlobalStyle />
      {element}
    </Layout>
  )
}
