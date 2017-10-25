import * as React from 'react'

const logo = './logo.svg'

import ConnectedSample from './content/sample/ConnectedSample'

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React-Redux-Express</h2>
        </div>

          <ConnectedSample/>
      </div>
    )
  }
}

export default App
