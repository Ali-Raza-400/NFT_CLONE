import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function ConnectWallet() {
  
  return (

    <div className="flex flex-col justify-between h-screen">
      <header className="h-16 "><Navbar /></header>

      <main className='mx-14'>
        <div className=" main h-76  py-60 pl-40 ">
          <div className="text-6xl sm:w-2/3 md:w-full lg:w-1/2">
            Connect Your Wallet before Creating
          </div>

          <div>
            <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white hover:text-slate-900 hover:bg-fuchsia-700 mt-9">
              Connect wallet
            </button>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ConnectWallet