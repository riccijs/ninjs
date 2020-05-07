import React, { cloneElement } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { NinJsProps } from './compiler/types'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Sidebar from './components/sidebar/Sidebar'
import Body from './components/body/Body'
import Frame from './components/frame/Frame'
import { defaultTheme } from './utils'

export default function NinJs(props: NinJsProps) {
  const {
    themeOptions = defaultTheme,
    header,
    sidebar,
    body,
    footer,
  } = props

  return (
    <MuiThemeProvider theme={ createMuiTheme(themeOptions) }>
      <Frame
        sidebar={sidebar && <Sidebar>{ cloneElement(sidebar) }</Sidebar>}
        header={header && <Header>{ cloneElement(header) }</Header>}
        body={body && <Body>{ cloneElement(body) }</Body>}
        footer={footer && <Footer>{ cloneElement(footer) }</Footer>}
      />
    </MuiThemeProvider>
  )
}