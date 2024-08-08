import React from "react";
import Logo from '/images/csc-logo.png' 
import IG_Logo from '/images/ig-logo.png'

function ContentFooter(){
    return(
        <div className="bg-black flex  justify-center flex-row mt-28 gap-72 pt-7 h-64">
            <div className="">
                <h1 className="italic font-bold text-white text-xl">CSC</h1>
                <h2 className=" text-white text-lg">Computer Student Club</h2>
                <img src={Logo} alt="logo CSC" width="108px" className="mr-15"/>
            </div>
            <div className="">
                <h1 className="italic font-bold text-white text-xl">Navigasi Cepat</h1>
                <ul className="flex flex-col gap-2 mt-4 text-white">
                    <li><a href="#home" className='hover:text-yellow-400 text-lg'>Home</a></li>
                    <li><a href="#about" className='hover:text-yellow-400 text-lg'>About</a></li>
                    <li><a href="#divisi" className='hover:text-yellow-400 text-lg'>Divisi</a></li>
                    <li><a href="#ContactUs" className='hover:text-yellow-400 text-lg'>Contact Us</a></li>
                </ul>
            </div>
            <div>
                <h1 className="italic font-bold text-white text-xl">Media Sosial</h1>
                <div className="flex">
                    <img src={IG_Logo} alt="" width="58px" className="relative top-4"/>
                    <a href="https://www.instagram.com/cscpnj/" className="text-white text-lg relative top-6 left-2">@cscpnj</a>
                </div>
            </div>
            
        </div>
    )
}

export default ContentFooter;