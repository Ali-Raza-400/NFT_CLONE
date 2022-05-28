import React from 'react'
import pic1 from '../../assets/DiffGrad.png'
import Btns from '../../components/btns'
import UploadFile from '../../components/uploadFile'
import Inputcomp from '../../components/inputcomp'
import './AllDrawingTools.css'




function AllDrawingTools() {
  return (
    <div >
      <div className="container mx-auto">
        <h3 className='text-4xl my-5 ml-24'> All Drawing Tools</h3>
        <div className="flex mx-2">
          <div className='grid grid-cols-3 md:grid-col-2 gap-3'>
            <div className='mb-5'>
            <div className="relative">
                  <img className='rounded-t-lg mb-5' src={pic1} alt="" />

                
                    <div className="text-black absolute top-36 left-36  bg-yellow-500 rounded">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </div>
              
                </div>
            <div className="overflow-hidden  relative">
                  <img className='rounded-t-lg mb-5' src={pic1} alt="" />

                  <div>
                    <div className="text-black absolute top-36 left-36  bg-yellow-500 rounded">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                </div>
            <div className="overflow-hidden  relative">
                  <img className='rounded-t-lg mb-5' src={pic1} alt="" />

                  <div>
                    <div className="text-black absolute top-36 left-36  bg-yellow-500 rounded">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                </div>
            
            </div>
            <div>
            <div className="overflow-hidden  relative">
                  <img className='rounded-t-lg mb-5' src={pic1} alt="" />

                  <div>
                    <div className="text-black absolute top-36 left-36  bg-yellow-500 rounded">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden  relative">
                  <img className='rounded-t-lg mb-5' src={pic1} alt="" />

                  <div>
                    <div className="text-black absolute top-36 left-36  bg-yellow-500 rounded">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden  relative">
                  <img className='rounded-t-lg mb-5' src={pic1} alt="" />

                  <div>
                    <div className="text-black absolute top-36 left-36 bg-yellow-500 rounded">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-0'>
            <div >
              <div className="mb-6">
                <Inputcomp title="Sunset at sea with a purple sky" label={'Text Prompt'} innerLabel={true}/>
              </div>
              <div className="mb-6">

                <select id="countries" className="bg-inherit border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block w-full p-3  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-black dark:focus:border-black">
                  <option selected>Select</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="mb-6">

                <select id="countries" className=" border border-gray-300 text-gray-900 text-sm focus:ring-black focus:border-black block w-full p-3   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-black dark:focus:border-black">
                  <option selected>Select</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div>
                <div className="text-sm">Art style</div>
                <div>
                  <Btns title='Abstract' />
                  <Btns title='Figuratie' />
                  <Btns title='Geometric' />
                  <Btns title='Minimalist' />
                </div>
                <div>
                  <Btns title='Nature' />
                  <Btns title='Pop' />
                  <Btns title='Surrealist' />
                  <Btns title='Urban' />
                </div>

              </div>
              <div className="text-xl">Upload Base Image</div>
              <UploadFile />

            </div>
            <div className='flex flex-col my-4'>
            
              <button className='px-8 py-3 mb-4 bg-purple-500'>Print ART -></button>
              <button className='px-8 py-3 mb-4'>Convert to NFT -></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllDrawingTools