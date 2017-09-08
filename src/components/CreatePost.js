import React, { Component } from 'react';

import { connect } from 'react-redux';

class CreatePost extends Component {
  render() {
    let title = this.props.title;
    let author = this.props.author;
    let body = this.props.body;

    return (
      <div className="CreatePost">
        <input name="title" placeholder="Title" value={this.props.title} onChange={(evt) => this.props.inputChange(evt, 'title')} />
        <input name="author" placeholder="Author" value={this.props.author} onChange={(evt) => this.props.inputChange(evt, 'author')} />
        <textarea name="body" placeholder="Write Here..." rows="10" value={this.props.body} onChange={(evt) => this.props.inputChange(evt, 'body')}></textarea>
        <button onClick={() => this.props.publishPost(title, author, body)}>Publish</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.title,
    author: state.author,
    body: state.body
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    inputChange: (evt, input) => {
      console.log(evt.target.value, input);
      const action = { type: 'INPUT_CHANGE', value: evt.target.value, input };
      dispatch(action);
    },

    publishPost: (title, author, body) => {
      const post = { title, author, body }
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(post)
      }).then((response) => {
        return response.json();
      }).then((data) => {
        const action = { type: 'PUBLISH_POST', data };
        dispatch(action);
      }).then(() => {
        console.log('PROPS', ownProps);
        ownProps.history.push('/allposts');
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
