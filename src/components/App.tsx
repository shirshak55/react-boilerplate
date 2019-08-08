import * as React from 'react'
import { hot } from 'react-hot-loader'
import './../assets/scss/App.scss'

declare let module: object

const reactLogo = require('./../assets/img/react_logo.svg')

class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className='app'>
        <img src={reactLogo} height='480' />
      </div>
    )
  }
}

export default hot(module)(App)
