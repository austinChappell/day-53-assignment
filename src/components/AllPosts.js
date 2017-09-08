import React, { Component } from 'react';

import { connect } from 'react-redux';

import BlogPost from './BlogPost';

class AllPosts extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="AllPosts">
        {this.props.data.map((post) => {
          return <BlogPost key={post._id} post={post} />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then((response) => {
        return response.json();
      }).then((data) => {
        const action = { type: 'GET_DATA', data };
        dispatch(action);
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
