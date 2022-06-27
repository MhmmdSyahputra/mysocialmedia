import React, { Component } from 'react'
import { Fragment } from 'react'
import { posts } from './data/data'

export default class Story extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="story col-md-12 d-flex justify-content-center ms-5" style={{ marginTop: '100px', marginLeft: '100vh' }}>
                        <div className="wrapper" style={{ marginLeft: '33vh', backgroundColor: '#9BB0A9' }}>
                            {/* SUSUN DATA STORY DARI USER YG ME MOSPOSTING */}
                            {posts.map((list, index) => (
                                <div className="item mt-2">
                                    {/* STORY YG CIRCEL */}
                                    <h1 className="text-center">
                                        <a href="#" className="text-decoration-none text-dark">
                                            {/* FOTO PROFILE */}
                                            <img src={list.profil} width="50" height='50' className="img-story rounded-circle"
                                                alt="myprofil" />
                                            {/* NAMA */}
                                            <p className="text-center mt-2" style={{ fontSize: '0.3em' }}>{list.nama}</p>
                                        </a>
                                    </h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Fragment >
        )
    }
}
