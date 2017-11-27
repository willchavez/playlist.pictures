import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';

export default class App extends React.Component {
  render() {
    return (
      <div className="container helvetica">
        <Header />
        <Main />
      </div>
    );
  }
}
