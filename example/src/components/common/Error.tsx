import * as React from 'react'
interface Props { }
interface State { hasError: boolean }
class Error extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }
  componentDidCatch(error, info) {
    console.log(error, info, 'asdf')
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>this is wrong</div>
      )
    }
    return this.props.children
  }
}

export default Error;