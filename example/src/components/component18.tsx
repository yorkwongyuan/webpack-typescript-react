import * as React from 'react'
interface Props { forwardRef: any }
interface State { }
function logProps(WrappedComponent) {
  class LogProps extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props)
    }
    render() {
      const { forwardRef, ...rest } = this.props
      return (
        <WrappedComponent ref={forwardRef} {...rest} />
      )
    }
  }
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardRef={ref} />
  })
}

class FancyButton extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <div>typescript</div>
    )
  }
}

export default logProps(FancyButton)