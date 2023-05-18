import React from 'react'

export const Navbar = () => {
  return (
    <div className='h-16 w-full absolute '>
       <nav className='flex flex-row bg-white justify-end gap-3 my-4 border rounded-md mx-4 '>
      {/* my navbar content here */}

        <button className='my-3 '>Contact Us</button>
        <button className='bg-[var(--button-color)] py-2 border-[#CF7C01] rounded my-3 mr-3 px-6 '>Signup</button>
    </nav>
    </div>

  )
}
