import * as React from 'react'
export const theme = {
  dark: {
    background: 'red'
  },
  light: {
    background: 'green'
  }
}

export const ThemeContext = React.createContext(theme.dark)