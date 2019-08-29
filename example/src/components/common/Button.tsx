import * as React from 'react'
import { ThemeContext } from './Theme'

interface Props {
  onClick(): void
}
interface State { }

class Button extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <button style={theme} {...this.props} onClick={this.props.onClick} />)
        }
      </ThemeContext.Consumer>
    )
  }
}

// Button.contextType = ThemeContext

export default Button