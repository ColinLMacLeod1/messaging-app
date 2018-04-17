import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <aside className="sidebar">Users</aside>
        <section className="main">
          <section className="messages-list">Messages List</section>
          <section className="new-message">New Message</section>
        </section>
      </div>
    );
  }
}

export default App;
