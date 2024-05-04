import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Course from './Components/Course/CourseDiv.tsx'
import SearchBar from './Components/SearchDiv/Search.tsx'
import HomePage from './Components/Home/HomePage.tsx'
import Login from './Scenes/Home/Login.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<HomePage />} />
          <Route path='/course' element={<Course />} />
          <Route path='/about' element={<SearchBar />} />
        </Route>
        <Route path='/auth' element={<Login isRegister={false} />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
