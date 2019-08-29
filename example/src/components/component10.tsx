import * as React from 'react'

function Lists(props) {
  return (
    <>
      <li>1</li>
      <li>2</li>
    </>
  )
}

// Fragment的使用
class Input extends React.Component<{ inputRef: any }> {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <input type="text" ref={this.props.inputRef} />
      </>
    )
  }

}

// 转发ref
const FancyButton = React.forwardRef<any, any>((props, ref) => (
  <button className="FancyButton" ref={ref}>
    {props.children}
  </button>
));



class noObstruct extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef();
    this.buttonRef = React.createRef();
  }

  private textInput
  private buttonRef
  componentDidMount() {
    // this.textInput.current.focus()
    // this.buttonRef.current.focus()
  }
  render() {
    return (
      <>
        {/* 把ref传递下去 */}
        <Input inputRef={this.textInput} />
        {/* 转发 */}

        {/* <logProps>
          <FancyButton ref={this.buttonRef}>click</FancyButton>
        </logProps> */}
        <Lists />
      </>
    )
  }
}

export default noObstruct