import { ThemeOptions } from '@material-ui/core'

export const defaultTheme: ThemeOptions = {
  overrides: {
    MuiAppBar: {
      root: {
        padding: 0,
        margin: 0,
        boxShadow: 'none',
        MozBoxShadow: 'none',
        WebkitBoxShadow: 'none'
      }
    },
    MuiDrawer: {
      paper: {
        padding: 0,
        margin: 0
      }
    },
    MuiToolbar: {
      root: {
        boxShadow: 'none'
      }
    },
    MuiFormControl: {
      root: {
        marginBottom: 16
      }
    },
    MuiCardHeader: {
      root: {
        padding: 32
      }
    },
    MuiCardContent: {
      root: {
        padding: '0 32px 32px 32px'
      }
    },
    MuiCardActions: {
      root: {
        padding: '0 32px 32px 26px'
      }
    },
    MuiMenu: {
      paper: {
        padding: 0,
      }
    },
    MuiButton: {
      root: {
        textTransform: 'none'
      }
    },
    MuiDialog: {
      root: {
        '@media only screen and (max-width: 1023px)': {
          marginLeft: -30,
          width: 'calc(100vw + 60px)'
        }
      }
    },
    MuiDialogActions: {
      root: {
        padding: '0 26px 32px 32px'
      }
    },
    MuiGrid: {
      container: {
        padding: 8
      }
    }
  },
  palette: {
    common: {
      black: '#000',
      white: '#fff'
    },
    error: {
      contrastText: '#fff',
      dark: '#d32f2f',
      light: '#e57373',
      main: '#f44336'
    },
    primary: {
      contrastText: '#fff',
      dark: '#303f9f',
      light: '#7986cb',
      main: '#3f51b5'
    },
    secondary: {
      contrastText: '#fff',
      dark: '#c51162',
      light: '#ff4081',
      main: '#f50057'
    }, 
    type: 'light'
  },
}