import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/FooterDiv/Footer'
import SearchBar from './Components/SearchDiv/Search'
import Course from './Components/Course/CourseDiv'


//import './App.css'

const  App = ()=> {
 
  return (
    <div className= 'w-[85] m-auto bg-white'>
      <NavBar/>
      <SearchBar/>
      <Course/>
      <Footer/>
    </div>
  )
}

export default App
