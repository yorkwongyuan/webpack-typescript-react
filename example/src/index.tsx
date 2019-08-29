import * as React from "react";
const ReactDom = require("react-dom")
import { BrowserRouter as Router, Route, HashRouter, Switch, Link } from "react-router-dom"
import Hello from './components/component1'
import Tick from './components/component2'
import Welcome from './components/component3'
import Comment from './components/component4'
import Tick2 from './components/component5'
import Event from './components/component6'
import Lists from './components/component7'
import Form from './components/component8'
import Calculator from './components/component9'
import noObstruct from './components/component10'
import DynamicImport from './components/component11'
import ErrorTest from './components/component12'
import Context from './components/component13'
import Contexts from './components/component14'
import Example from './components/component15'
import Example2 from './components/component16'
import Ref from './components/component17'
import Ref2 from './components/component18'
import '../css/style.css';
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="nav">
          <HashRouter >
            <Link to="/index" className="nav-item">Hello</Link>
            <Link to="/hehe" className="nav-item">2.时钟</Link>
            <Link to="/welcome" className="nav-item">3.传参</Link>
            <Link to="/props" className="nav-item">4.组件props</Link>
            <Link to="/state" className="nav-item">5.state生命周期</Link>
            <Link to="/event" className="nav-item">6.事件处理</Link>
            <Link to="/lists" className="nav-item">7.列表渲染</Link>
            <Link to="/form" className="nav-item">8.受控组件</Link>
            <Link to="/calculator" className="nav-item">10.状态提升</Link>
            <div>高级部分</div>
            <Link to="/noObstruct" className="nav-item">11.无障碍</Link>
            <Link to="/dynamicImport" className="nav-item">12.动态引入</Link>
            <Link to="/errorTest" className="nav-item">13.错误边界</Link>
            <Link to="/context" className="nav-item">14-1.context</Link>
            <Link to="/contexts" className="nav-item">14-2.多个context</Link>
            <Link to="/contextExample" className="nav-item">14-3.context示例</Link>
            <Link to="/contextExample2" className="nav-item">14-4.context2示例</Link>
            <Link to="/ref" className="nav-item">15-1.Refs转发</Link>
            <Link to="/ref2" className="nav-item">15-2.Refs转发2</Link>
            <Switch>
              <Route path="/index" component={Hello}></Route>
              <Route path='/hehe' component={Tick} />
              <Route path='/welcome' component={Welcome} />
              <Route path='/props' component={Comment} />
              <Route path='/state' component={Tick2} />
              <Route path='/event' component={Event} />
              <Route path='/lists' component={Lists} />
              <Route path='/form' component={Form} />
              <Route path="/calculator" component={Calculator}></Route>
              <Route path="/noObstruct" component={noObstruct}></Route>
              <Route path="/dynamicImport" component={DynamicImport}></Route>
              <Route path="/errorTest" component={ErrorTest}></Route>
              <Route path="/context" component={Context}></Route>
              <Route path="/contexts" component={Contexts}></Route>
              <Route path="/contextExample" component={Example}></Route>
              <Route path="/contextExample2" component={Example2}></Route>
              <Route path="/ref" component={Ref}></Route>
              <Route path="/ref2" component={Ref2}></Route>
            </Switch>
          </HashRouter>
        </div>
      </div>
    )
  }
}
ReactDom.render(<App />, document.getElementById('root'))