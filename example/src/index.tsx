import * as React from "react";
const ReactDom = require("react-dom")
import { BrowserRouter as Router, Route, HashRouter, Switch, Link } from "react-router-dom"
import Hello from './components/component1'
import Tick from './components/component2'


class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <HashRouter>
            <Link to="/index">Hello</Link>
            <Link to="/hehe">hehe</Link>
            <Switch>
              <Route path="/index" component={Hello}></Route>
              <Route path='/hehe' component={Tick} />
            </Switch>
          </HashRouter>
        </div>
      </div>
    )
  }
}
ReactDom.render(<App />, document.getElementById('root'))