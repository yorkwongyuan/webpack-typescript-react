import * as React from 'react';
function Welcome(props) {
  return <Son name="York" />
}

function Son(props) {
  return <div>hello,{props.name}</div>
}

export default Welcome