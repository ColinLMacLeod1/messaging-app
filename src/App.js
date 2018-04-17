import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <aside className="sidebar">Users</aside>
        <section className="main">
          <MessageList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
