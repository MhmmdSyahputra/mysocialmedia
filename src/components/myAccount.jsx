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
              {/* SUSUSN DATA MYPROFILE */}
              {profilku.map((list, index) => (
                <Card className='content mb-4 ' style={{ width: '50rem', marginTop: '100px', borderRadius: '30px', backgroundColor: '#9BB0A9' }}>

                  {/* SAMPUL PROFILE */}
                  <div className="bg-profile">
                    <div className="col" style={{ height: '50vh' }}>
                      <img src={list.sampul} style={{ width: '100%', height: '50vh', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }} alt="" />
                    </div>
                  </div>

                  {/* FOTO PROFILE, NAMA, USERNAME DST  */}
                  <div className="profile" style={{ marginTop: '-150px' }}>
                    <div className="ms-5 row">

                      {/* FOTO PROFILE */}
                      <div className="col-4">
                        <img src={list.profil} className='rounded-circle mt-5 text-end myprofile' alt="profile" width="200" />
                        {/* USERNAME */}
                        <div className="username">
                          <h5 className='text-center mt-2 me-2'>{list.username}</h5>
                        </div>
                      </div>

                      <div className="col m-auto">
                        {/* NAMA */}
                        <h1 className="name mb-5">{list.nama}</h1>
                        <div className="row">
                          <div className="col text-center">

                            {/* MYPOST */}
                            <div className="posts">
                              <div className="number-posts">{list.myposts.length}</div>
                              <div className="text-posts">Post</div>
                            </div>
                          </div>

                          {/* MYFOLLOWED */}
                          <div className="col text-center">
                            <div className="posts">
                              <div className="number-posts">{list.followed}</div>
                              <div className="text-posts">Followed</div>
                            </div>
                          </div>

                          {/* MYFOLLOWERS */}
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
                  <div className="myfeeds m-4" >
                    <h5>My Feeds</h5>
                  </div>

                  {/* SUSUN DATA POSTINGAN YG SAYA PUNYA DARI DATA OBJEK PROFILE SAYA */}
                  {list.myposts.map((list2, index) => (
                    <div className="mypost mb-5">
                      <Card.Title className='text-start mb-3 ms- m-2 fs-5'>
                        <div className="row">

                          {/* MY FOTO PROFILE  */}
                          <div className="col-1 ms-3">
                            <img src={list.profil} width='50' className="rounded-circle border border-white bg-light me-4" alt="" />
                          </div>

                          {/* TIME POSTING */}
                          <div className="col m-auto">
                            {list.nama}
                            <div className="text-muted" style={{ fontSize: '0.6em' }}>{Math.floor(Math.random() * 15) + 1} hour ago</div>

                          </div>
                        </div>
                      </Card.Title>

                      {/* IMG POSTINGAN */}
                      <Card.Img variant="top" src={list2.img} />

                      <Card.Body>
                        <Card.Text className='text-start'>
                          <Row>

                            {/* LIKE IN MYPOST */}
                            <Col className='text-center'>
                              <span className="fs-4 me-3" >
                                <AiOutlineHeart />
                                <span className='fs-6 ms-2' >
                                  {Math.floor(Math.random() * 400) + 10} likes
                                </span>
                              </span>
                            </Col>

                            {/* COMMENT IN MYPOST */}
                            <Col className='text-center'>
                              <span className="fs-4">
                                <BsChat />
                                <span className='fs-6 ms-2'>{Math.floor(Math.random() * 200) + 10}</span>
                              </span>
                            </Col>

                            {/* SHARE IN MYPOST */}
                            <Col className='text-center'>
                              <span className="fs-4"><BsShare /></span>
                            </Col>

                            {/* SAVE IN MYPOST */}
                            <Col className='text-center'>
                              <span className="fs-4"><BsBookmark /></span>
                            </Col>

                          </Row>

                          {/* CAPTION POST */}
                          <Card.Title className='text-start fs-6 mt-2 ms-3'>
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
