

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Course from './Components/Course/CourseDiv.tsx'
import SearchBar from './Components/SearchDiv/Search.tsx'
import HomePage from './Scenes/Home/HomePage.tsx'
import Login from './Scenes/Home/Login.tsx'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import TestPage from './Scenes/Test/pageTest.tsx'
import ClassDetailScreen from './Scenes/Class/ClassDetailScreen.tsx'
import PageOrder from './Scenes/Order/PageOrder.tsx'
import PageThank from './Scenes/Order/PageThank.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} >
                        <Route index element={<HomePage />} />
                        <Route path='/detail' element={<ClassDetailScreen />} />
                        <Route path='/about' element={<SearchBar />} />
                        <Route path='/payment' element={<PageOrder />} />
                        <Route path='/testing' element={<TestPage />} />
                    </Route>
                    <Route path='/auth' element={<Login isRegister={false} />} />
                    <Route path='/register' element={<Login isRegister={true} />} />
                    <Route path='/thank' element={<PageThank />} />
                </Routes>

            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
)
