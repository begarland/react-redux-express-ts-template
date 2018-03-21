import * as React from 'react'

const logo = './logo.svg'

import ConnectedSample from './sample/ConnectedSample'

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React-Redux-Express-TypeScript-Sass template</h2>
          <h4>navigate to localhost:3002/sample to view the connected Redux-router component</h4>
        </div>

          <ConnectedSample />
      </div>
    )
  }
}

export default App
