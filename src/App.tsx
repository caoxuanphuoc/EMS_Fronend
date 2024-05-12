import React from 'react'
import NavBar from './Components/Header/Header'
import Footer from './Components/FooterDiv/Footer'
import SearchBar from './Components/SearchDiv/Search'
import Course from './Components/Course/CourseDiv'
import './App.css'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'

const App = () => {

  return (
    <div className='app-container relative'>
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container sticky">
        <div className="sideNav"></div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
      <div className='mt-16 sticky'>
        <Footer />
      </div>
      {/* <NavBar />
      <SearchBar />
      <Course />
      */}
    </div>
  )
}

export default App
