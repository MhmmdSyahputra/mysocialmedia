import React, { Component, Fragment } from 'react'
import Home from '../Home';
import { explore } from '../data/data';

export default class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      flag1: true,
      flag2: true,
    }
  }

  render() {

    return (
      <Fragment>
        <div className="container">
          <h2 className='text-light mb-2 mt-2' style={{ marginLeft: '45vh' }}>Feeds</h2>
        </div>

        {
          explore
            .filter(post => post.id == this.state.id)
            .map(post =>
              <div className="col-sm-6 col-lg-4 mb-4" style={{ marginLeft: '67vh' }}>
                <Home data={post} />
              </div>
            )
        }

      </Fragment >
    )
  }
}




