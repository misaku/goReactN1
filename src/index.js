import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Post from './post/Post';
import './style.scss';
import DbPost from './DbPost';

class App extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    this.setState({ post: DbPost.results });
  }

  posts() {
    const { post } = this.state;
    return post.map(pst => <Post data={pst} key={pst.id} />);
  }

  render() {
    return (
      <Fragment>
        <Header />
        <section id="principal">
          <section id="secundario">{this.posts()}</section>
        </section>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
