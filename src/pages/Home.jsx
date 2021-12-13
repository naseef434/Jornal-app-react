import React from 'react'
import Journal from '../components/Journal'
import MyNavbar from '../components/MyNavbar'
import Table from '../components/Table'


export default function Home() {
    return (
        <div>
            <MyNavbar />
            <br />
            <Journal />
            <Table />
        </div>
    )
}

