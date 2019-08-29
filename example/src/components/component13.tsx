import * as React from 'react'

const ThemeContext = React.createContext('light')

interface Props { }
interface State { }

class Son extends React.Component {
  static contextType = ThemeContext
  render() {
    return (
      <div>
        {this.context}
      </div>
    )
  }
}
function Layout() {
  return (
    <Son />
  )
}
class App extends React.Component<Props, State>{
  render() {
    return (
      <>
        <ThemeContext.Provider value="123">
          <Layout />
        </ThemeContext.Provider>
      </>
    )
  }
}

export default App