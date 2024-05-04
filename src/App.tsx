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
    <div className='app-container'>
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sideNav"></div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
      {/* <NavBar />
      <SearchBar />
      <Course />
      <Footer /> */}
    </div>
  )
}

export default App
