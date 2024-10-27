import React, { useEffect } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Feature1 from '../../../features/Feature1'
import Feature2 from '../../../features/Feature2'
import Feature3 from '../../../features/Feature3'

const Layout = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            navigate('/')
        }
    }, [])

    return (
        <div className='main-container'>
            <div className="header-container">
                <Header />
            </div>
            <div className="flex justify-start" >
                <div className="sidebar-container">
                    <Sidebar />
                </div>
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<Navigate to="/main/feature1"/>}/>
                        <Route path="/feature1" element={<Feature1/>}/>
                        <Route path="/feature2" element={<Feature2/>}/>
                        <Route path="/feature3" element={<Feature3/>}/>
                    </Routes>
                </div>
            </div>

            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}

export default Layout