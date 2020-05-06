import React, { ReactElement, useState } from 'react'
import classnames from 'classnames'
import { makeStyles, Drawer, Toolbar, IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

export interface SidebarProps {
  children: ReactElement
}

const useStyles = makeStyles(theme => ({
  drawer: {
    position: 'relative',
    height: '100vh',
    background: theme.palette.background.default,
    color: theme.palette.text.secondary,
  },
  drawerOpen: {
    width: theme.spacing(30),
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClosed: {
    width: theme.spacing(8),
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  iconButton: {
    position: 'fixed',
    zIndex: 3,
    top: theme.spacing(1),
    left: theme.spacing(1),
  },
  menu: {
    padding: theme.spacing(1),
  }
}))

const Sidebar = ({ children }: SidebarProps) => {
  const [ isOpen, setIsOpen ] = useState(true)
  const classes = useStyles()

  const handleToggleSidebar = () => setIsOpen(previousIsOpen => !previousIsOpen)
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      classes={{ paper: classnames(classes.drawer, isOpen ? classes.drawerOpen : classes.drawerClosed )}}
      open
    >
      <Toolbar className={classes.toolbar}>
        <IconButton 
          className={classes.iconButton}
          onClick={handleToggleSidebar}
        >
          <Menu />
        </IconButton>
      </Toolbar>
      <div className={classes.menu}>
        { children }
      </div>
    </Drawer>
  )
}
export default Sidebar