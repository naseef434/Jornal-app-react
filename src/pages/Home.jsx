import React from 'react'
import Index from '../components/Index'
import Journal from '../components/Journal'
import MyNavbar from '../components/MyNavbar'
// import Table from '../components/Table'


export default function Home() {
    return (
        <div>
            <MyNavbar />
            <br />
            <Journal />
            <Index />
        </div>
    )
}

