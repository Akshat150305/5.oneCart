import React from 'react'
import logo from "../assets/logo.jpeg"
function Footer() {
  return (
    <div className='w-[100%] md:h-[36vh] h-[21vh] mb-[77px] md:mb-[0px]'>
        <div className='w-[100%] md:h-[30vh] h-[15vh]  md:mb-[0px] bg-[#A3DC9A] flex items-center justify-center md:px-[50px] px-[5px]'>
            <div className='md:w-[30%] w-[35%] h-[100%] flex items-start justify-center flex-col gap-[5px]  '>
                <div className='flex items-start justify-start gap-[5px] mt-[10px] md:mt-[40px]'>
                    <img src={logo} alt=""  className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]'/>
                    <p className='text-[19px] md:text-[20px] text-[black] '>Apno Khet</p>
            
                </div>
                <p className='text-[15px] text-[#1e2223] hidden md:block'>ApnoKhet is your all-in-one online shopping destination for plants and plants related acesories, offering top-quality products, unbeatable deals, and fast delivery—all backed by trusted service designed to make your life easier every day.</p>
                    <p className='text-[15px] text-[#1e2223] flex md:hidden'>Fast. Easy. Reliable. OneCart Shopping</p>

                
            </div>
            <div className='md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center'>
                    <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                        <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans '>COMPANY</p>

                    </div>
                    <ul>
                         <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>Home</li>
                        <li className='text-[15px] text-[#1e2223] cursor-pointer '>About us</li>
                        <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>Delivery</li>
                        <li className='text-[15px] text-[#1e2223] cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>

                <div className='md:w-[25%] w-[40%]  h-[100%] flex items-center justify-center flex-col text-center '>
                     <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                        <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans '>GET IN TOUCH</p>

                    </div>
                     <ul>
                         <li className='text-[15px] text-[#1e2223] '>+91-6379496122</li>
                        <li className='text-[15px] text-[#1e2223] '>apnokhet@gmail.com</li>
                        <li className='text-[15px] text-[#1e2223] hidden md:block'>+91-98875 13456</li>
                        <li className='text-[15px] text-[#1e2223] hidden md:block'>admin@Apnokoeht.shop</li>
                    </ul>
                </div>

        </div>
        <div className='w-[100%] h-[1px] bg-slate-400'></div>
        <div className='w-[100%] h-[5vh] bg-[#FFF9BD] flex items-center justify-center'>Copyright 2025@ApnoKhet.shop-All Rights Reserved</div>
      
    </div>
  )
}

export default Footer
