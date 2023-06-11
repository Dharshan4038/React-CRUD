import React from 'react'
import { FaLaptop,FaTabletAlt,FaMobileAlt } from 'react-icons/fa';


const Header = ({title,width}) => {
  return (
    <header className='header'>
      <h1 className='text-center'>{title}  {width < 768 ? <FaMobileAlt /> : width < 992 ? <FaTabletAlt /> : <FaLaptop /> }</h1>
    </header>
  )
}
         
export default Header