import React, { ReactElement } from 'react'
import { makeStyles, Toolbar } from '@material-ui/core'

interface HeaderProps {
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
    borderBottom: `1px solid ${theme.palette.divider}`,
    color: theme.palette.text.secondary,
    ...theme.mixins.toolbar,
  },
}))

export default function Header({ children }: HeaderProps) {

  const classes = useStyles()
  return (
    <Toolbar className={classes.toolbar}>
      { children }
    </Toolbar>
  )
}