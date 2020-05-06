import { ReactElement } from 'react'
import { ThemeOptions } from '@material-ui/core'

export interface NinJsProps {
  themeOptions?: ThemeOptions
  header?: ReactElement
  sidebar?: ReactElement
  body?: ReactElement
  footer?: ReactElement
}