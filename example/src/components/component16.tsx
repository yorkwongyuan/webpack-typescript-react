import * as React from 'react'
import ThemeButton from './common/Button2'
import { ThemeContext } from './common/Theme2'
import { theme } from './common/Theme'
interface P { }
interface S { theme: any, toggleTheme: any }

class App extends React.Component<P, S>{
  constructor(props: P) {
    super(props)
    this.state = {
      theme: theme.dark,
      toggleTheme: this.toggleTheme
    }
  }


  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === theme.dark ? theme.light : theme.dark
    }))
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <ThemeButton />
      </ThemeContext.Provider>
    )
  }
}
export default App