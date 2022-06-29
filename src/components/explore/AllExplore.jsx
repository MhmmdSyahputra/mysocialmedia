import React, { Component, Fragment } from 'react'
import { Card } from 'react-bootstrap'
import { explore } from '../data/data'
import { useHistory } from 'react-router-dom'
import { MdOutlineExplore } from 'react-icons/md'

const AllExplore = () => {
    let history = useHistory();

    const jalan = (index) => {
        history.push("/explore/" + index);
    }

    return (
        <>
            <div className="col-md-13 mb-2 d-flex justify-content-center ms-5 mt-4" style={{ marginLeft: '100vh' }}>
                <div className="row ">
                    <div className="container">
                        <h2 className='text-light mb-5' style={{ marginLeft: '45vh', marginTop: '100px' }}>
                            <MdOutlineExplore className='me-3 fs-1' />Explore
                        </h2>

                        <Card className='content mb-4' style={{ width: '50rem', borderRadius: '30px' }}>
                            <div className="row pt-3 pb-3">
                                {explore.map((list, index) => (
                                    <div className="col-3 mx-4 m-1  img-hover" >
                                        <img onClick={() => jalan(list.id)} src={list.img} alt="" width='250' className="border border-dark img-explore" />
                                    </div>
                                ))}

                            </div>
                        </Card>
                    </div>
                </div>
            </div >
        </>
    )

}

export default AllExplore
