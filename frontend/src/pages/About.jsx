import React from 'react'
import Title from '../component/Title'
import about from '../assets/about.jpg'
import NewLetterBox from '../component/NewLetterBox'

function About() {
  return (
    <div className=' w-[99vw] min-h-[100vh] flex items-center justify-center flex-col  bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px]'>
      <Title text1={'ABOUT'} text2={'US'}/>
      <div className='w-[100%]  flex items-center justify-center flex-col lg:flex-row'>

        <div className='lg:w-[50%] w-[100%] flex items-center justify-center '>
          <img src={about} alt="" className='lg:w-[65%] w-[80%] shadow-md shadow-black rounded-sm' />
        </div>
        <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px]  flex-col mt-[20px] lg:mt-[0px]'>
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
            Apno Khet (meaning "Our Farm" in Hindi) is a family-owned and operated farm dedicated to providing our community with fresh, high-quality, and sustainably grown produce. We believe in the power of local agriculture to nourish both people and the planet. With reliable service, fast delivery, and great value, We makes your online shopping experience simple, satisfying, and stress-free.
          </p>
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
             Each plant at Apno Khet is nurtured with care, meticulously packaged for a safe journey, and delivered directly to your doorstep. We are committed to providing you with not just a plant, but a new member of your family, along with all the guidance you need to help it thrive. We bring everything you need to one trusted platform with fast delivery, easy returns, and a customer-first shopping experience you’ll love.
          </p>
          <p className='lg:w-[80%] w-[100%] text-[15px] text-[white] lg:text-[18px] mt-[10px] font-bold'>Our Mission</p>
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
            Empowering Plant Parents: We want to empower every plant enthusiast, from the seasoned gardener to the absolute beginner. We provide clear, simple guidance and resources to help you choose the perfect plant and give it the care it needs to flourish.
          </p>
        </div>
      </div>
      <div className='w-[100%] flex items-center justify-center flex-col gap-[10px]'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
        <div className='w-[80%] flex items-center justify-center lg:flex-row flex-col py-[40px]'>

          <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col  px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]'>
            <b className='text-[20px] font-semibold text-[#bff1f9]'>Quality Assurance</b>
            <p>We guarantee quality through strict checks, reliable sourcing, and a commitment to customer satisfaction always.</p>
          </div>
           <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col  px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]'>
            <b className='text-[20px] font-semibold text-[#bff1f9]'>Convenience</b>
            <p>
             Shop easily with fast delivery, simple navigation, secure checkout, and everything you need in one place.
            </p>
          </div>
           <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col  px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]'>
            <b className='text-[20px] font-semibold text-[#bff1f9]'>Exceptional Customer Service</b>
            <p>
              Our dedicated support team ensures quick responses, helpful solutions, and a smooth shopping experience every time.
            </p>
          </div>
        </div>
      </div>
      <NewLetterBox/>
      
    </div>
  )
}

export default About
