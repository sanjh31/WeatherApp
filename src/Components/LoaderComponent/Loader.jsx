import React from 'react'

const Loader = () => {
  return (
    <div className="wallpaper flex items-center justify-center " style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%',}}>
    {/* Add any loading animation or text here */}
    
    <h1 className="text-6xl flex flex-col items-center justify-center loading-container text-white w-full h-2/4 rounded" >

      <span className="lg:text-5xl text-3xl sm:text-4xl mt-5 font-bold text-gray-300 ">Fetching Data...</span>

      </h1>
  </div>
  )
}

export default Loader