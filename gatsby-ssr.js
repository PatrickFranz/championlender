import Layout from './src/components/layout.js'
import { GlobalStyle } from './src/styles/GlobalStyle.js'
import React from 'react'

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout>
      <GlobalStyle />
      {element}
    </Layout>
  )
}

function setLeadId() {
  var s = document.createElement('script')
  s.id = 'LeadiDscript_campaign'
  s.type = 'text/javascript'
  s.async = true
  s.src =
    '//create.lidstatic.com/campaign/cd215e19-865f-3649-c858-0b6646c7cfa9.js?snippet_version=2'
  var LeadiDscript = document.getElementById('LeadiDscript')
  LeadiDscript.parentNode.insertBefore(s, LeadiDscript)
}

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script id="LeadiDscript" type="text/javascript">
      setLeadId()
    </script>,
  ])
}
