import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import pic1 from '../assets/DiffGrad.png'
import Btns from '../components/btns'
import UploadFile from '../components/uploadFile'
import Inputcomp from '../components/inputcomp'
import './AllDrawingTools.css'



function AllDrawingTools() {
  return (
    <div >
      <header className="h-16"><Navbar /></header>




      <div className="container mx-auto">
      <h3 className='text-4xl my-5 ml-24'> All Drawing Tools</h3>
        <div key={1} className="flex mx-2">
          <div className='grid grid-cols-3 md:grid-col-2 gap-3'>
            <div className='mb-5'>
              <img className="rounded-t-lg mb-5 " src={pic1} alt="Card Images" />
              <img className="rounded-t-lg mb-5" src={pic1} alt="Card Images" />
              <img className="rounded-t-lg mb-5" src={pic1} alt="Card Images" />

            </div>
            <div>
              <img className="rounded-t-lg mb-5" src={pic1} alt="Card Images" />
              <img className="rounded-t-lg mb-5" src={pic1} alt="Card Images" />
              <img className="rounded-t-lg mb-5" src={pic1} alt="Card Images" />

            </div>
          </div>
          <div className='grid grid-cols-1 gap-1'>
            <div className="">
              <div className="mb-6">
                <Inputcomp title="Large Input" />
              </div>
              <div className="mb-6">
                <Inputcomp title="Large Input" />
              </div>
              <div className="mb-6">
                <Inputcomp title="Large Input" />
              </div>
              <div>
                <div className="text-sm">Art style</div>
                <div>
                  <Btns title='yellow' />
                  <Btns title='yellow' />
                  <Btns title='yellow' />
                  <Btns title='yellow' />



                </div>
                <div>
                  <Btns title='yellow' />
                  <Btns title='yellow' />
                  <Btns title='yellow' />
                  <Btns title='yellow' />

                </div>

              </div>
              <div className="text-xl">Upload Base Image</div>
              <UploadFile />
              
            </div>
            <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
            <button className='px-8 py-3'>Sign Up</button>
        </div>
          </div>



        </div>

      </div>








      <footer className="h-16 "><Footer /></footer>
    </div>
  )
}

export default AllDrawingTools