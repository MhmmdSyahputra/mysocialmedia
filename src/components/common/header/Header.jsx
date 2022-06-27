import React from 'react'
import Head from './head'

const Header = () => {
  return (
    <>
      <div className="App">
        {/* HEADER LEFT */}
        <div className="col-md-3 fixed-top">
          <Head />
        </div>
        {/* HEADER TOP */}
        <div className='fixed-top text-start p-2 fs-4 shadow' style={{ width: '100%', backgroundColor: '#9BB0A9' }}>Athena App
          <img src="https://mikroskilacid-my.sharepoint.com/personal/211110636_students_mikroskil_ac_id/Documents/tugas-web-s2-react/img/New_Project__1_-removebg-preview%20(1)%20(1)%20(1).png" className='ps-3' width='50' alt="" />
        </div>
      </div>
    </>
  )
}

export default Header