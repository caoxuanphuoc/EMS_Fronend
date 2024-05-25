import Footer from './Components/FooterDiv/Footer'
import './App.css'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'

const App = () => {

    return (
        <div className='bg-blue-50'>
            <div className="header-container">
                <Header />
            </div>
            <div className="main-container">
                <div className="sideNav"></div>
                <div className="app-content">
                    <Outlet />
                </div>
            </div>
            <div className='mt-16 '>
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
