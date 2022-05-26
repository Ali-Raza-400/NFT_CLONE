import React from 'react'

function Inputcomp(props) {
  return (
    <div className='mb-10 mt-10'>
        <label for="large-input" className="block mb-2 text-sm font-medium "></label>
                        <input type="text" id="large-input" placeholder={props.title} className="block p-4 w-full bg-gray-50  border border-gray-200 sm:text-md focus:ring-blue-100 focus:border-blue-200   dark:focus:ring-blue-100 dark:focus:border-blue-100" />
                     
    </div>
  )
}

export default Inputcomp