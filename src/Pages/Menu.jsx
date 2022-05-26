import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function Menu() {
  return (
    <div>
      <div className="flex flex-col justify-between h-screen">
        <header className="h-16 "><Navbar /></header>
        <main className="mb-auto h-52 my-16 mx-72 ">

          <div className=''>
            <div className="text-8xl">Lorem</div>
            <div className="text-6xl">Lorem</div>
            <div className="text-6xl">Lorem</div>
            <div className="text-6xl">Lorem</div>
            <div className="text-6xl">Lorem</div>
            <div className="text-6xl">Lorem</div>
          </div>

        </main>
        <footer className="h-16 "><Footer /></footer>
      </div>
    </div>
  )
}

export default Menu