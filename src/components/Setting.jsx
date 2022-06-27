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

export default class Setting extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-md-13 mb-2 d-flex justify-content-center ms-5 mt-4" style={{ marginLeft: '100vh' }}>
                    <div className="row">
                        <div className="container">
                            <Card className='content mb-4 p-5' style={{ width: '50rem', marginTop: '100px', borderRadius: '30px', backgroundColor: '#9BB0A9' }}>
                                <span className='mb-5'>
                                    <span className="fs-4 text-start">Menu</span>
                                    <hr />
                                </span>

                                <div className="row d-flex justify-content-center">

                                    <div className="col-5 shadow menu-setting ps-4 p-2 m-3">
                                        <div className='icon-menu display-4'><FaUserFriends /></div>
                                        <div className='title-menu fs-4'>Friends</div>
                                    </div>

                                    <div className="col-5 shadow menu-setting ps-4 p-2 m-3">
                                        <div className='icon-menu display-4'><HiUserGroup /></div>
                                        <div className='title-menu fs-4'>Group</div>
                                    </div>

                                    <div className="col-5 shadow menu-setting ps-4 p-2 m-3">
                                        <div className='icon-menu display-4'><SiHomeassistantcommunitystore /></div>
                                        <div className='title-menu fs-4'>Market Place</div>
                                    </div>

                                    <div className="col-5 shadow menu-setting ps-4 p-2 m-3">
                                        <div className='icon-menu display-4'><MdOutlineLiveTv /></div>
                                        <div className='title-menu fs-4'>Watch</div>
                                    </div>

                                    <div className="col-5 shadow menu-setting ps-4 p-2 m-3">
                                        <div className='icon-menu display-4'><BiMoviePlay /></div>
                                        <div className='title-menu fs-4'>Reels</div>
                                    </div>

                                    <div className="col-5 shadow menu-setting ps-4 p-2 m-3">
                                        <div className='icon-menu display-4'><MdEvent /></div>
                                        <div className='title-menu fs-4'>Event</div>
                                    </div>

                                    <div className="col-5 shadow menu-setting ps-4 p-2 m-3">
                                        <div className='icon-menu display-4'><FaGamepad /></div>
                                        <div className='title-menu fs-4'>Game</div>
                                    </div>

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
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1" className='mb-3 shadow'>
                                        <Accordion.Header><IoIosHelpCircle className='fs-2 me-3' />Help & Support</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
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
