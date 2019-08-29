import * as React from 'react'

let RefButton = React.forwardRef<any, any>((prop, ref) => (
  <button ref={ref}>按键ref</button>
))

interface R { current: any }
let ref: R = React.createRef()

class App extends React.Component {
  componentDidMount() {
    setTimeout(function () {
    }, 1000)
  }
  render() {
    return (
      <RefButton ref={ref} />
    )
  }
}

export default App

