import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-gradient-to-b from-gray-800 to-black  p-4 text-white"> 
        <div className=' max-w-screen-lg p-30 mx-auto flex flex-col justify-center w-full h-full'> 
            <div> 
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500 '>
                  Contact 
                </p>
            </div>
            <p className=' text-left text-xl mt-5'>
            If you want to get in touch with me, please shoot an email to badrinathv98@gmail.com
            </p>
            <br/>
        </div> 
        <div>
        </div>
    </div>
  )
}

export default Contact