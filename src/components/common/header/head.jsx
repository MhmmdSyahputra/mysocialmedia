import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { profilku } from '../../data/data';
import { AiOutlineHome, AiOutlineMessage, AiOutlineSetting } from 'react-icons/ai'
import { MdOutlineExplore } from 'react-icons/md'

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



                        <div className="menu-left active ms-4">
                            <ul style={{ listStyle: 'none' }} className='text-start'>


                                <Link to='/' className='link-menu'>
                                    <li> <AiOutlineHome className='fs-4 me-3' /> Home</li>
                                </Link>
                                <Link to='/message' className='link-menu'>
                                    <li ><AiOutlineMessage className='fs-4 me-3' /> Massege</li>
                                </Link>
                                <Link to='/explore' className='link-menu'>
                                    <li ><MdOutlineExplore className='fs-4 me-3' /> Explore</li>
                                </Link>
                                <Link to='/setting' className='link-menu'>
                                    <li ><AiOutlineSetting className='fs-4 me-3' /> Setting</li>
                                </Link>


                            </ul>
                        </div>



                    </div>


                </div>
                <div className="row fixed-bottom ms-5">
                    <div className="col-md-3 fixed-bottom">
                        <div className="copyright mb-4 me-3">
                            <hr />
                            <h6 className=' text-muted' style={{ fontSize: '0.9em' }}>Copyright&copy; TeamAthena</h6>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}