import * as React from 'react'
import ThemeButton from './common/Button'
import { ThemeContext, theme } from './common/Theme'
interface Props { }
interface State {
  theme: any
}
type P = {
  changeTheme(): void
}

function Toolbar(props: P) {
  return (
    <ThemeButton onClick={props.changeTheme}>按键</ThemeButton>
  )
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.handle = this.handle.bind(this)
    this.state = {
      theme: theme.light
    }
  }
  handle() {
    this.setState(state => ({
      theme: state.theme === theme.light ? theme.dark : theme.light
    }))
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Toolbar changeTheme={this.handle} />
      </ThemeContext.Provider>
    )
  }
}
export default App