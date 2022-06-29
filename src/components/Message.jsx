import React, { Component, Fragment } from 'react'
import { Card } from "react-bootstrap";
import { msg } from './data/data';

export default class Message extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-md-13 mb-2 d-flex justify-content-center ms-5 mt-4" style={{ marginLeft: '100vh' }}>
          <div className="row">
            <div className="container">
              <Card className='content mb-4 p-5' style={{ width: '50rem', marginTop: '100px', borderRadius: '30px', backgroundColor: '#9BB0A9' }}>

                {/* HEAD MESSAGE */}
                <span className='mb-5'>
                  <span className="fs-4 text-start">Message</span>
                  <span className="fs-4" style={{ float: 'right' }}>All</span>
                </span>

                <div className="massage">
                  <div className="row">
                    {/* SUSUN DATA MASSAGE */}
                    {msg.map((list, index) => (

                      // FOTO PROFIL
                      <div className="row mb-3 effect" style={{ borderBottom: ' 0.8px solid #282A35' }}>
                        <div className='col-1 '>
                          <img src={list.profil} alt="" width='60' className="mb-3 rounded-circle border border-white bg-light me-4" />
                        </div>

                        {/* TEXT RIGHT IN PROFIL */}
                        <div div className="col ms-5 m-auto mb-4" >
                          <div className="name-title fs-6">{list.nama}</div>
                          <div className="name-text fs-6 text-muted">{list.pesan} </div>
                        </div>

                        {/* ONLINE/OFFLINE */}
                        <div className="col-2 py-3">
                          <div className="name-title fs-6 text-end"
                            style={{ color: list.keterangan === "online" ? "green" : "#516762" }}
                          >{list.keterangan}</div>
                        </div>
                      </div>

                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div >
        </div >
      </Fragment>
    )
  }
}
