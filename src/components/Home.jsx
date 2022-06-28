import React, { Fragment, Component } from 'react'
import { Card, Row, Col } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChat, BsShare } from "react-icons/bs";
import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import toast from 'siiimple-toast';
import 'siiimple-toast/dist/style.css';// style required

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profil: this.props.data.profil,
      nama: this.props.data.nama,
      username: this.props.data.username,
      img: this.props.data.img,
      caption: this.props.data.caption,
      likes: this.props.data.likes,
      flag1: true,
      flag2: true,
      totlike: ''

    };
    this.like = this.like.bind(this);
    this.simpan = this.simpan.bind(this);

  }

  like() {
    if (this.state.flag1) {
      this.setState({ flag1: false });
    } else {
      this.setState({ flag1: true });
    }
  }

  simpan(nama) {
    if (this.state.flag2) {
      toast.success("Postingan " + nama + " Disimpan", {
        position: "top|right",
        margin: 15,
        delay: 0,
        duration: 2000,
      });
      this.setState({ flag2: false });
    } else {
      toast.alert("Postingan " + nama + " dihapus dari simpan", {
        position: "top|right",
        margin: 15,
        delay: 0,
        duration: 2000,
      });
      this.setState({ flag2: true });
    }
  }

  render() {
    return (
      <Fragment>
        <div className="content col-md-13 mb-2 d-flex justify-content-center ms-5 mt-4" style={{ marginLeft: '100vh' }}>
          <div className="row">
            <div className="container">

              {/* SUSUN DATA POSTINGAN */}

              <Card className='content mb-4' style={{ width: '50rem', borderRadius: '30px', backgroundColor: '#9BB0A9' }}>
                {/* BAGIAN PROFIL SI PEMOSTING DAN NAMA NYA */}
                <Card.Title className='text-start mb-3 ms-5 m-2 fs-5'>
                  <div className="row">
                    <div className="col-1">
                      <img src={this.state.profil} width='50' className="rounded-circle border border-white bg-light me-4" alt="" />
                    </div>
                    <div className="col m-auto">
                      {this.state.nama}
                      <div className="text-muted" style={{ fontSize: '0.6em' }}>2 hour ago</div>
                    </div>
                  </div>
                </Card.Title>

                {/* IMG POSTINGAN NYA */}
                <Card.Img variant="top" onDoubleClick={this.like} src={this.state.img} />

                {/* BAGIAN BAWAH POSTINGAN */}
                <Card.Body>
                  <Card.Text className='text-start'>
                    {/* BAGIAN LIKE,COMMENT,SHARE & SAVE */}
                    <Row>

                      {/* LIKE */}
                      <Col className='text-center'>
                        <span className="fs-4 me-3 icon-posts" onClick={this.like}>
                          {this.state.flag1 ? <AiOutlineHeart /> : <FcLike />}
                          <span className='fs-6 ms-2' >
                            {this.state.flag1 ? this.state.likes - 1 : this.state.likes + 1 - 1}
                            likes
                          </span>
                        </span>
                      </Col>

                      {/* COMMENT */}
                      <Col className='text-center'>
                        <span className="fs-4 icon-posts">
                          <BsChat />
                          <span className='fs-6 ms-2'></span>
                        </span>
                      </Col>

                      {/* SHARE */}
                      <Col className='text-center'>
                        <span className="fs-4 icon-posts"><BsShare /></span>
                      </Col>

                      {/* SIMPAN */}
                      <Col className='text-center'>
                        <span className="fs-4 icon-posts" onClick={() => this.simpan(this.state.nama)}>
                          {this.state.flag2 ? <BsBookmark /> : < BsFillBookmarkCheckFill />}
                        </span>
                      </Col>
                    </Row>

                    {/* NAMA & CAPTION */}
                    <Card.Title className='text-start fs-6 mt-2'>
                      {this.state.nama} &nbsp; <small> {this.state.caption} </small>
                    </Card.Title>

                  </Card.Text>
                </Card.Body>
              </Card>

            </div>
          </div>
        </div>
      </Fragment >
    );

  }
}

