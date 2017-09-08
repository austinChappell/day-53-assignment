import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store/';

import AllPosts from './AllPosts';
import BaseLayout from './BaseLayout';
import CreatePost from './CreatePost';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <BaseLayout>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/createpost" component={CreatePost} />
                <Route path="/allposts" component={AllPosts} />
              </Switch>
            </BaseLayout>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
