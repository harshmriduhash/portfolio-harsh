import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Blogs from '../components/Blog'

const Blog = () => {
  return (
  <>
    <Navbar/>
    <HeroImg2 heading="BLOGS." 
    text="These are some of my blogs"/> 
    <Blogs/>
    <Footer/></>
  )
}

export default Blog