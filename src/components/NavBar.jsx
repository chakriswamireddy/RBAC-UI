import React from 'react'
import { Link, NavLink } from 'react-router'
import { FaUserCircle } from "react-icons/fa";


function NavBar() {
    return (
        <div className="navbar bg-neutral mb-6">

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                   
                  
                        <li> <NavLink to='/' className={`${({ isActive }) => (isActive ? 'text-secondary' : ' ')} active:text-secondary focus:text-secondary `} > Users </NavLink> </li>
                        <li> <NavLink to='/roles' className={`${({ isActive }) => (isActive ? 'text-secondary' : ' ')} active:text-secondary focus:text-secondary `} > Roles </NavLink> </li>
                    
                </ul>
            </div>
            <div className="flex-1 border-0 border-yellow-900 ">
                <a className="btn btn-ghost text-xl"> Admin Portal </a>
            </div>

            {/* <div className='flex-1 flex gap-4 border-2 border-yellow-400'>
    <Link to='/roles'  > Roles </Link>
    <Link to='/'  > Users </Link>
    


  </div> */}
            <div className="navbar-center hidden lg:flex gap-10 flex-1  ">
                <ul className="menu menu-horizontal px-1 gap-4  ">
                    <li> <NavLink to='/' className={`${({ isActive }) => (isActive ? 'text-secondary' : ' ')} active:text-secondary focus:text-secondary `} > Users </NavLink> </li>
                    <li> <NavLink to='/roles' className={`${({ isActive }) => (isActive ? 'text-secondary' : ' ')} active:text-secondary focus:text-secondary `} > Roles </NavLink> </li>
                </ul>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                      
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] h-40 mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-sm font-bold text-center"> No new notifications </span>
                        
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <FaUserCircle className='w-full h-full' />
                           
                        </div>
                    </div>
                    {/* <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul> */}
                </div>
            </div>
        </div>
    )
}

export default NavBar