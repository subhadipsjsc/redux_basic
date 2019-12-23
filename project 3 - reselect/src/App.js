import React, { Component } from 'react';

import Posts from './components/posts';
import Counter from './components/counter';

export class App extends Component {
  render() {
    return (
      
      <div>
        <h1>Reselect Redux</h1>
        <Posts />
        <Counter />
      </div>
      
    )
  }
}

export default App

