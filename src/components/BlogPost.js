import React,  { Component } from 'react';

class BlogPost extends Component {
  render() {
    return (
      <div className="BlogPost">
        <h2 className="title">{this.props.post.title}</h2>
        <h3 className="author">{this.props.post.author}</h3>
        <p className="body">{this.props.post.body}</p>
      </div>
    )
  }
}

export default BlogPost;
