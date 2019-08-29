import * as React from 'react'
import { theme } from './Theme'
export const ThemeContext = React.createContext({
  theme: theme.dark,
  toggleTheme: () => { }
})