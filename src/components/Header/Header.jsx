import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='flex justify-center p-4'>
            <a href='#' className='flex justify-end'>
                <img className=' flex w-1/4' src="../../public/images/logo.png" alt="Logo" />
            </a>
            <nav className='flex-1 flex text-center justify-center gap-10 p-4 font-bold'>
                <a href="#">Trabajos</a>
                <a href="#">Sobre Nosotros</a>
                <a href="#">Contacto</a>
            </nav>
        </header>
    )
}

export default Header