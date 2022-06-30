// import React, { Fragment, Component } from 'react'
// import { Card, Row, Col } from "react-bootstrap";
// import { AiOutlineHeart } from "react-icons/ai";
// import { BsChat, BsShare } from "react-icons/bs";
// import { IoMdArrowRoundBack } from "react-icons/io";
// import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";
// import { FcLike } from "react-icons/fc";
// import toast from 'siiimple-toast';
// import 'siiimple-toast/dist/style.css';// style required
// import { explore } from '../data/data';
// import { Link } from 'react-router-dom';


// export default class OneItem extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       id: this.props.match.params.id,
//       flag1: true,
//       flag2: true,
//     }
//     this.like = this.like.bind(this);
//     this.simpan = this.simpan.bind(this);
//   };

//   like() {
//     if (this.state.flag1) {
//       this.setState({ flag1: false });
//     } else {
//       this.setState({ flag1: true });
//     }
//   }

//   simpan(nama) {
//     if (this.state.flag2) {
//       toast.success("Postingan " + nama + " Disimpan", {
//         position: "top|right",
//         margin: 15,
//         delay: 0,
//         duration: 2000,
//       });
//       this.setState({ flag2: false });
//     } else {
//       toast.alert("Postingan " + nama + " dihapus dari simpan", {
//         position: "top|right",
//         margin: 15,
//         delay: 0,
//         duration: 2000,
//       });
//       this.setState({ flag2: true });
//     }
//   }

//   render() {
//     return (
//       <Fragment>
//         <div className="content col-md-13 mb-2 d-flex justify-content-center ms-5 mt-4" style={{ marginLeft: '100vh' }}>
//           <div className="row">
//             <div className="container">
//               <h2 className='text-light mb-5' style={{ marginLeft: '40vh', marginTop: '100px', cursor: 'pointer' }}>
//                 <Link to='/explore' className='text-decoration-none' style={{ color: '#F8F9FA', }}><IoMdArrowRoundBack className='me-3 fs-1' />Back</Link>
//               </h2>
//               {/* SUSUN DATA POSTINGAN */}
//               {
//                 explore
//                   .filter(post => post.id == this.state.id)
//                   .map(post =>
//                     <Card className='content mb-4' style={{ width: '40rem', borderRadius: '30px', backgroundColor: '#9BB0A9' }}>
//                       {/* BAGIAN PROFIL SI PEMOSTING DAN NAMA NYA */}
//                       <Card.Title className='text-start mb-3 ms-5 m-2 fs-5'>
//                         <div className="row">
//                           <div className="col-1 me-3">
//                             <img src={post.profil} width='50' className="rounded-circle border border-white bg-light " alt="" />
//                           </div>
//                           <div className="col m-auto">
//                             {post.nama}
//                             <div className="text-muted" style={{ fontSize: '0.6em' }}>{Math.floor(Math.random() * 24)} hour ago</div>
//                           </div>
//                         </div>
//                       </Card.Title>

//                       {/* IMG POSTINGAN NYA */}
//                       <Card.Img variant="top" width='10' onDoubleClick={this.like} src={post.img} />

//                       {/* BAGIAN BAWAH POSTINGAN */}
//                       <Card.Body>
//                         <Card.Text className='text-start'>
//                           {/* BAGIAN LIKE,COMMENT,SHARE & SAVE */}
//                           <Row>

//                             {/* LIKE */}
//                             <Col className='text-center'>
//                               <span className="fs-4 me-3 icon-posts" onClick={this.like}>
//                                 {this.state.flag1 ? <AiOutlineHeart /> : <FcLike />}
//                                 <span className='fs-6 ms-2' >
//                                   {this.state.flag1 ? post.likes - 1 : post.likes + 1 - 1}
//                                   likes
//                                 </span>
//                               </span>
//                             </Col>

//                             {/* COMMENT */}
//                             <Col className='text-center'>
//                               <span className="fs-4 icon-posts">
//                                 <BsChat />
//                                 <span className='fs-6 ms-2'>
//                                   {post.coments}
//                                 </span>
//                               </span>
//                             </Col>

//                             {/* SHARE */}
//                             <Col className='text-center'>
//                               <span className="fs-4 icon-posts">
//                                 <BsShare />
//                               </span>
//                             </Col>

//                             {/* SIMPAN */}
//                             <Col className='text-center'>
//                               <span className="fs-4 icon-posts" onClick={() => this.simpan(post.nama)}>
//                                 {this.state.flag2 ? <BsBookmark /> : < BsFillBookmarkCheckFill />}
//                               </span>
//                             </Col>
//                           </Row>

//                           {/* NAMA & CAPTION */}
//                           <Card.Title className='text-start fs-6 mt-2'>
//                             {post.nama} &nbsp; <small> {post.caption} </small>
//                           </Card.Title>

//                         </Card.Text>
//                       </Card.Body>
//                     </Card>
//                   )
//               }


//             </div>
//           </div>
//         </div>
//       </Fragment >
//     )
//   }

// }




import React, { Component, Fragment } from 'react'
import Post from '../post';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { explore } from '../data/data';
import { Link } from 'react-router-dom';

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
        <div className="container" style={{ marginTop: '100px' }}>
          <h2 className='text-light mb-2 mt-2' style={{ marginLeft: '50vh', marginTop: '500px' }}>
            <Link to='/explore' className='text-decoration-none' style={{ color: '#F8F9FA', }}><IoMdArrowRoundBack className='me-3 fs-1' />Back</Link>
          </h2>
        </div>

        {
          explore
            .filter(post => post.id == this.state.id)
            .map(post =>
              <div className="col-sm-6 col-lg-4 mb-4" style={{ marginLeft: '67vh' }}>
                <Post data={post} />
              </div>
            )
        }

        {/* {
          posts.map((list, index) => (
            <>
              <div className="col-sm-6 col-lg-4 mb-4" style={{ marginLeft: '67vh' }}>
                <Home data={list} />
              </div>
            </>
          ))
        } */}
      </Fragment >
    )
  }
}




