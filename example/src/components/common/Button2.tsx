import * as React from 'react'
import { ThemeContext } from './Theme2'
class ThemeButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (<button onClick={toggleTheme} style={theme}>超级按钮</button>)}
      </ThemeContext.Consumer>
    )
  }
}

export default ThemeButton