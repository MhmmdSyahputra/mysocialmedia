import React, { Component } from 'react'
import { Card, Row, Col } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChat, BsShare } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { Fragment } from 'react'
import { profilku } from './data/data';

export default class myAccount extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-md-13 mb-2 d-flex justify-content-center ms-5 mt-4" style={{ marginLeft: '100vh' }}>
          <div className="row">

            <div className="container">
              {profilku.map((list, index) => (
                <Card className='content mb-4 p-3' style={{ width: '50rem', marginTop: '100px', borderRadius: '30px', backgroundColor: '#9BB0A9' }}>

                  <div className="bg-profile">
                    <div className="col bg-light" style={{ height: '50vh', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}>
                    </div>
                  </div>

                  <div className="profile" style={{ marginTop: '-150px' }}>
                    <div className="ms-5 row">
                      <div className="col-4">
                        <img src={list.profil} className='rounded-circle mt-5 myprofile' alt="profile" width="200" />
                        <div className="username">
                          <h5 className='text-center mt-2 me-2'>{list.username}</h5>
                        </div>
                      </div>

                      <div className="col m-auto">
                        <h1 className="name mb-5">{list.nama}</h1>
                        <div className="row">
                          <div className="col text-center">
                            <div className="posts">
                              <div className="number-posts">{list.myposts.length}</div>
                              <div className="text-posts">Post</div>
                            </div>
                          </div>
                          <div className="col text-center">
                            <div className="posts">
                              <div className="number-posts">{list.followed}</div>
                              <div className="text-posts">Followed</div>
                            </div>
                          </div>
                          <div className="col text-center">
                            <div className="posts">
                              <div className="number-posts">{list.followers}</div>
                              <div className="text-posts">Followers</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <hr />


                  {/* ALL MY FEEEDS */}
                  <div className="myfeeds" >
                    <h5>My Feeds</h5>
                  </div>

                  {list.myposts.map((list2, index) => (
                    <div className="mypost mb-5">
                      <Card.Title className='text-start mb-3 ms- m-2 fs-5'>
                        <div className="row">
                          <div className="col-1 ">
                            <img src={list.profil} width='50' className="rounded-circle border border-white bg-light me-4" alt="" />
                          </div>
                          <div className="col m-auto">
                            {list.nama}
                            <div className="text-muted" style={{ fontSize: '0.6em' }}>2 hour ago</div>
                          </div>
                        </div>

                      </Card.Title>
                      <Card.Img variant="top" src={list2.img} />
                      <Card.Body>
                        <Card.Text className='text-start'>
                          <Row>

                            <Col className='text-center'>
                              <span className="fs-4 me-3" >
                                <AiOutlineHeart />
                                <span className='fs-6 ms-2' >
                                  {Math.floor(Math.random() * 400) + 10} likes
                                </span>
                              </span>
                            </Col>
                            <Col className='text-center'>
                              <span className="fs-4">
                                <BsChat />
                                <span className='fs-6 ms-2'>{Math.floor(Math.random() * 200) + 10}</span>
                              </span>
                            </Col>
                            <Col className='text-center'>
                              <span className="fs-4"><BsShare /></span>
                            </Col>
                            <Col className='text-center'>
                              <span className="fs-4"><BsBookmark /></span>
                            </Col>
                          </Row>

                          <Card.Title className='text-start fs-6 mt-2'>
                            {list.nama} &nbsp; <small> {list2.caption} </small>
                          </Card.Title>

                        </Card.Text>
                      </Card.Body>
                    </div>
                  ))}

                </Card>
              ))}
            </div>
          </div>
        </div >
      </Fragment >
    )
  }
}
