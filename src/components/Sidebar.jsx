import React from 'react'

const Sidebar = () => {
  return (
    <div className='lg:w-3/12 mt-5 bg-[var(--sidebar-color)] lg:m-0 m-4'>
    <h2 className='mt-5 text-center font-bold text-3xl'>Trending Songs</h2>
    <div className='flex flex-col gap-1 mt-3 '>
        <button className='px-3 py-3 md:px-6 bg-white m-3 border rounded text-2xl'> Unavailable by <span className='italic'>  Davido</span> <i class="fa-solid fa-plus ml-3"></i> </button>
        <button className='px-3 py-3 md:px-6 bg-white m-3 border rounded text-2xl ' >Unavailable by <span className='italic'>Davido</span> <i class="fa-solid fa-plus ml-3"></i></button>
        <button className='px-3 py-3 md:px-6 bg-white m-3 border rounded text-2xl ' >Unavailable by <span className='italic'>Davido</span> <i class="fa-solid fa-plus ml-3"></i></button>
        <button className='px-3 py-3 md:px-6 bg-white m-3 border rounded text-2xl ' >Unavailable by <span className='italic'>Davido</span> <i class="fa-solid fa-plus ml-3"></i></button>
        <button className='px-3 py-3 md:px-6 bg-white m-3 border rounded text-2xl ' >Unavailable by <span className='italic'>Davido</span> <i class="fa-solid fa-plus ml-3"></i></button>
        <button className='bg-[var(--button-color)] px-4 py-2 border-[#CF7C01] rounded mx-6 my-4 text-xl '>View More </button>
    </div>

    </div>
  )
}

export default Sidebar