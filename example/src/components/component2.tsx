import * as React from 'react'
const ReactDom = require("react-dom")
function Tick() {
  const element = <div>
    <h1>Hello,world</h1>
    <div>
      The time is {new Date().toLocaleString()}
    </div>
  </div>
  return element
}


export default Tick
