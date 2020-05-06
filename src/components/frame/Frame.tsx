import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core'

interface FrameProps {
  header?: ReactElement,
  sidebar?: ReactElement,
  body?: ReactElement,
  footer?: ReactElement,
}

type ClassName = 'body' | 'header' | 'footer' | 'headerFooter'

const useStyles = makeStyles( theme => ({
  container: {
    display: 'flex'
  },
  main: {
    width: '100%',
    height: '100vh',
  },
  body: {
    height: '100vh'
  },
  header: {
    height: `calc(100vh - ${theme.spacing(10) + 1}px)`
  },
  headerFooter: {
    height: `calc(100vh - ${theme.spacing(16) + 2}px)`
  },
  footer: {
    height: `calc(100vh - ${theme.spacing(8) + 2}px)`
  }
}))

const Frame = ({header, sidebar, body, footer}: FrameProps) => {
  const classes = useStyles()
  const bodyClassName = 
    !!header && !!footer 
    ? 'headerFooter' 
    : !!header 
    ? 'header' 
    : !!footer
    ? 'footer'
    : 'body'

  const renderBody = (body: ReactElement | undefined, className: ClassName ) => {
    return (
      <div className={classes[className]}>{body}</div>
    )
  }

  return (
    <div className={classes.container}>
      { sidebar }
      <div className={classes.main}>
        { header }
        { renderBody(body, bodyClassName) }
        { footer }
      </div>
    </div>
  )
}

export default Frame