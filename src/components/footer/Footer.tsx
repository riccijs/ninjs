import React, { ReactElement } from 'react'
import { makeStyles, Toolbar } from '@material-ui/core'

interface FooterProps {
  children?: ReactElement
  isForSidebar?: true
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    position: 'relative',
    display: 'flex',
    maxHeight: theme.spacing(4),
    alignItems: 'center',
    justifyContent: 'flex-start',
    background: theme.palette.background.default,
    borderTop: `1px solid ${theme.palette.divider}`,
    color: theme.palette.text.secondary,
    ...theme.mixins.toolbar,
  },
}))

export default function Footer({ children }: FooterProps) {

  const classes = useStyles()
  return (
    <Toolbar className={classes.toolbar}>
      { children }
    </Toolbar>
  )
}