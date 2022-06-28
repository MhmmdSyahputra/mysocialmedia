import React, { Component, Fragment } from 'react'
import Home from './Home';
import { posts } from './data/data';
import Story from './Story';

export default class Post extends Component {

  render() {

    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className=" col-md-12">
              <Story />
            </div>
          </div>
        </div>

        {posts.map((list, index) => (
          <>
            <div className="col-sm-6 col-lg-4 mb-4" style={{ marginLeft: '67vh' }}>
              <Home data={list} />
            </div>
          </>
        ))
        }
      </Fragment>
    )
  }
}
