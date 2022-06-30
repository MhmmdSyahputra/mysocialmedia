import React, { Component, Fragment } from 'react'
import Post from './post';
import { posts } from './data/data';
import Story from './Story';

export default class Home extends Component {

  render() {

    return (
      <Fragment>
        <div className="container">
          <h2 className='text-light mb-2' style={{ marginLeft: '45vh', marginTop: '100px' }}>Story</h2>
          <div className="row">
            <div className=" col-md-12">
              <Story />
            </div>
          </div>
          <h2 className='text-light mb-2 mt-2' style={{ marginLeft: '45vh' }}>Feeds</h2>
        </div>

        {
          posts.map((list, index) => (
            <>
              <div className="col-sm-6 col-lg-4 mb-4" style={{ marginLeft: '67vh' }}>
                <Post data={list} />
              </div>
            </>
          ))
        }
      </Fragment >
    )
  }
}
