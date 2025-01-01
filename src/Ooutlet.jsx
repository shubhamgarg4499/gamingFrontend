import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Ooutlet() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Ooutlet