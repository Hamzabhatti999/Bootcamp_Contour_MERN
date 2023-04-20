import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <nav>
                <div >

                    <div className="bg-indi p-4 flex items-center justify-center">
                        <ul className="font-medium flex p-4 md:p-0 mt-4  rounded-lg  md:space-x-8">
                            <li>
                                <Link to="/" className="block py-2 pl-3 pr-4 text-white text-lg hover:underline" aria-current="page" >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="block py-2 pl-3 pr-4 text-white text-lg hover:underline" aria-current="page" >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/career" className="block py-2 pl-3 pr-4 text-white text-lg hover:underline" aria-current="page" >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link to="/aboutus"  className="block py-2 pl-3 pr-4 text-white text-lg hover:underline" aria-current="page" >
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <h1 className='text-center mt-10 text-3xl italic font-bold text-gray-900 uppercase'>---------------</h1>
                </div>
            </nav>
        </>
    )
}
