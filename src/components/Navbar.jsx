import React,{useState} from 'react'
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
   const [naV , setNav] = useState(false)
   const handleNav = () => {setNav(!naV)}
   return (
     <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
       <h1 className='w-full text-3xl font-bold text-[#00df9a]'> React. </h1>
       <ul className='hidden md:flex font'>
          <li className='p-4'>HOME</li>
          <li className='p-4'>COMPANY</li>
          <li className='p-4'>RESOURCES</li>
          <li className='p-4'>ABOUT</li>
          <li className='p-4'>CONTRACT</li>
       </ul>

       <div onClick={handleNav} className='block md:hidden'> {naV ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}</div>
       
       <div className={naV ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
       
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'> React. </h1>
            <ul className='p-4 uppercase'>
               <li className='p-4 border-b border-gray-600'>HOME</li>
               <li className='p-4 border-b border-gray-600'>COMPANY</li>
               <li className='p-4 border-b border-gray-600'>RESOURCES</li>
               <li className='p-4 border-b border-gray-600'>ABOUT</li>
               <li className='p-4'>CONTRACT</li>
            </ul>

       </div>
     </div>
   )
}

export default Navbar;