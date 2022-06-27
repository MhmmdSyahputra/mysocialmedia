import React from 'react'
import { Card, Row, Col } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChat, BsShare } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { posts } from './data/data';
import Story from './story/Story';

const Home = () => {

  return (
    <>
      <Story />
      <div className="col-md-13 mb-2 d-flex justify-content-center ms-5 mt-4" style={{ marginLeft: '100vh' }}>

        <div className="row">
          <div className="container">
            {posts.map((list, index) => (
              // <li key={index}>
              //   <Link to={list.path}> {"<" + list.logo + " />"} {list.text}</Link>
              // </li>
              <Card className='content mb-4' style={{ width: '50rem', borderRadius: '30px', backgroundColor: '#9BB0A9' }}>
                <Card.Title className='text-start mb-3 ms-5 m-2 fs-5'>
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
                <Card.Img variant="top" src={list.img} />
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
                      {list.nama} &nbsp; <small> {list.caption} </small>
                    </Card.Title>

                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>

        </div>


      </div>

    </ >
  )
}

export default Home