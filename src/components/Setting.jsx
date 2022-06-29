import React, { Component } from 'react'
import { Fragment } from 'react'
import { Card } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { FaUserFriends, FaGamepad } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdOutlineLiveTv, MdEvent, MdOutlineWork } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { RiUserSettingsFill } from "react-icons/ri";
import { IoIosHelpCircle } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

export default class Setting extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-md-13 mb-2 d-flex justify-content-center ms-5 mt-4" style={{ marginLeft: '100vh' }}>
                    <div className="row">
                        <div className="container">
                            <Card className='content mb-4 p-5' style={{ width: '50rem', marginTop: '100px', borderRadius: '30px', backgroundColor: '#9BB0A9' }}>
                                <span className='mb-5'>
                                    <h2 className="fs-4 text-start text-light"><AiOutlineMenu className='me-3 fs-1' />Menu</h2>
                                    <hr />
                                </span>

                                {/* DATA DATA MENU IN SETTING */}
                                <div className="row d-flex justify-content-center">

                                    {/* FRIENDS */}
                                    <div className="col-5 shadow menu-setting ps-4 p-2 m-3">
                                        <div className='icon-menu display-4'><FaUserFriends /></div>
                                        <div className='title-menu fs-4'>Friends</div>
                                    </div>

                                    {/* GROUP */}
                                    <div className="col-5 shadow menu-setting ps-4 p-2 m-3">
                                        <div className='icon-menu display-4'><HiUserGroup /></div>
                                        <div className='title-menu fs-4'>Group</div>
                                    </div>

                                    {/* MARKET */}
                                    <div className="col-5 shadow menu-setting ps-4 p-2 m-3">
                                        <div className='icon-menu display-4'><SiHomeassistantcommunitystore /></div>
                                        <div className='title-menu fs-4'>Market Place</div>
                                    </div>

                                    {/* WATCH */}
                                    <div className="col-5 shadow menu-setting ps-4 p-2 m-3">
                                        <div className='icon-menu display-4'><MdOutlineLiveTv /></div>
                                        <div className='title-menu fs-4'>Watch</div>
                                    </div>

                                    {/* RELLS */}
                                    <div className="col-5 shadow menu-setting ps-4 p-2 m-3">
                                        <div className='icon-menu display-4'><BiMoviePlay /></div>
                                        <div className='title-menu fs-4'>Reels</div>
                                    </div>

                                    {/* EVENT */}
                                    <div className="col-5 shadow menu-setting ps-4 p-2 m-3">
                                        <div className='icon-menu display-4'><MdEvent /></div>
                                        <div className='title-menu fs-4'>Event</div>
                                    </div>

                                    {/* GAME */}
                                    <div className="col-5 shadow menu-setting ps-4 p-2 m-3">
                                        <div className='icon-menu display-4'><FaGamepad /></div>
                                        <div className='title-menu fs-4'>Game</div>
                                    </div>

                                    {/* JOB */}
                                    <div className="col-5 shadow menu-setting ps-4 p-2 m-3">
                                        <div className='icon-menu display-4'><MdOutlineWork /></div>
                                        <div className='title-menu fs-4'>Job</div>
                                    </div>

                                </div>
                                <hr />

                                {/* Setting Dropdown */}
                                <Accordion>
                                    <Accordion.Item eventKey="0" className='mb-3' shadow>
                                        <Accordion.Header> <RiUserSettingsFill className='fs-2 me-3' /> Settings & Pricacy</Accordion.Header>
                                        <Accordion.Body>
                                            This Privacy Policy describes Our polices and procedures on the collection, use and disclosure
                                            of Your information when You use the Service and tells You about Your privacy right and how the law
                                            protects You. We use Your Personal Data to provide and improve the Service. By using the Service, You
                                            agree to the collection and use of information in accordance with this Privacy Policy.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1" className='mb-3 shadow'>
                                        <Accordion.Header><IoIosHelpCircle className='fs-2 me-3' />Help & Support</Accordion.Header>
                                        <Accordion.Body>
                                            If you have any problen or any question you can contact us by our Support.
                                            Email us at athenapp@support.com
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>

                            </Card>
                        </div>
                    </div>
                </div>
            </Fragment >
        )
    }
}
