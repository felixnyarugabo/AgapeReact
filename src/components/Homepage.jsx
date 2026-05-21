import React from 'react'
import Marquee from './Marquee'
import MoreInfor from './MoreInfor'
import SocialMedia from './SocialMedia'
import OurMision from '../OurMision'
import BlogLastPage from './BlogLastPage'

function Homepage() {
  return (
    <div className='home'>
        <Marquee/>
        <SocialMedia/>
         <MoreInfor/>
       <OurMision/>
       <BlogLastPage/>
    </div>
  )
}

export default Homepage