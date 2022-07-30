import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className="bg-green-500">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" 
                        exact
                        // activeClassName="text-white"
                        className="inline-flex items-center py-6 px-3 mr-4 text-yellow-100 hover:text-yellow-200 text-4xl font-bold cursive tracking-widest"
                    >  
                        Adel
                    </NavLink>
                    <NavLink 
                        to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-200 hover:text-yellow-400"
                        // activeClassName="text-red-100 bg-red-700"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink 
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-200 hover:text-yellow-400"
                        // activeClassName="text-red-100 bg-black-700"

                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-200 hover:text-yellow-400"
                        // activeClassName="text-red-100 bg-red-700"
                    >
                        About Me !
                    </NavLink>                    
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                        url="https://twitter.com/tazibtclass" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{height: 35, width: 35}}
                    />
                    <SocialIcon 
                        url="https://www.facebook.com/tazibtclass" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{height: 35, width: 35}}/>
                    <SocialIcon 
                        url="https://www.linkedin.com/in/adel-abdi/" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}