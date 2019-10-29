import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import NameForm from './components/NameForm';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={NameForm} />
      </Layout>
    );
  }
}
