import React, { Component } from 'react'
import { nav } from '../../data/data'
import { Link } from "react-router-dom";
import { profilku } from '../../data/data';
// import { AiOutlineHome, AiOutlineMessage, AiOutlineSetting } from 'react-icons/ai'

export default class NavleftComponent extends Component {
    render() {
        return (
            <div className='nav-left col-md-12 p-3'>
                <div className="contentNavleft ">
                    <div className="profile-left mt-5">

                        {profilku.map((list, index) => (
                            <div className="profile">
                                <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className='rounded-circle mt-5' alt="prfile" width="100" />

                                <div className="title-profile mb-5">
                                    <div className="fs-6 font-weight-bold">{list.nama}</div>
                                    <div className="fs-6 text-muted">{list.username}</div>
                                    <Link to="/myprofile" className="btn mt-2 mb-2 rounded-pill ps-3 pe-3" style={{ backgroundColor: "#282A35", color: '#9BB0A9' }}>Profile</Link>
                                    <div className="row">
                                        <div className="col"> {list.myposts.length} <br /> <span className='text-muted'>Posts</span> </div>
                                        <div className="col">{list.followed} <br /> <span className='text-muted'>Followers</span> </div>
                                        <div className="col">{list.followers} <br /> <span className='text-muted'>Followed</span> </div>
                                    </div>
                                </div>
                            </div>
                        ))}



                        <div className="menu-left active">
                            <ul style={{ listStyle: 'none' }} className='text-start'>
                                {nav.map((list, index) => (

                                    <Link key={index} to={list.path} className='link-menu'>
                                        <li >{list.text}</li>
                                    </Link>

                                ))}
                            </ul>
                        </div>
                        <div className="copyright" style={{ marginTop: '20vh' }}>
                            <h6 className='fs-6 text-muted m-auto'>Copyight&copy; teamAthena</h6>
                        </div>

                    </div>


                </div>

            </div >
        )
    }
}