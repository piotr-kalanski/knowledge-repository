import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

class PostsList extends Component {

  render() {
    let postsNodes = this.props.data.map(function(post, index) {
      return <li key={index}>{post.id} - {post.title}</li>;
    });

    return (
      <div id="project-posts" className="postsList">
        <ul>{postsNodes}</ul>
      </div>
    );
  }
}
class App extends Component {

  state = {
    currentPage: 1,
    pageCount: null,
    pageSize: 5,
    data: []
  }

  handlePageClick = data => {
    let selected = data.selected;
    let currentPage = selected + 1;

    this.setState({ currentPage: currentPage });
  };

  componentDidMount () {
    this.fetchPosts();
  }

  componentDidUpdate() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    axios
      .get('http://localhost:8081/posts?page=' + this.state.currentPage)
      .then(response => {
        this.setState({
          data: response.data.items,
          pageCount: response.data.total_pages
        })
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Current Page { this.state.currentPage }</h1>

        <PostsList data={ this.state.data } />
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          activeClassName={'active'}
          breakClassName={'page-link'}
          breakLinkClassName={'page-item'}
          disabledClassName={'disabled'}
        />
      </div>
    );
  }
  
}

export default App;
