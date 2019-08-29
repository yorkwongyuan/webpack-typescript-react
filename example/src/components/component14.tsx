import * as React from 'react'

let ThemeContext = React.createContext("light")
let UserContext = React.createContext("male")

class Son extends React.Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {theme => (
            <UserContext.Consumer>
              {man => (
                <div>{theme}{man}</div>
              )}
            </UserContext.Consumer>
          )}
        </ThemeContext.Consumer>
      </div>
    )
  }
}


function Layout() {
  return (
    <Son />
  )
}

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <UserContext.Provider value="woman">
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App;