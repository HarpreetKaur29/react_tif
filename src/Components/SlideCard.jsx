import React from 'react'
import GrilledTomato from '../Assets/Images/grilled_tomatoes.png'

const SlideCard = () => {
  return (
    <div className='p-6 rounded-3xl border border-#93A2D361'>
                <div className="card-img rounded-3xl overflow-hidden">
                    <img src={GrilledTomato} alt="tomato" /></div>  
                    <div className="card-body mt-4 flex flex-col gap-y-8 pb-8 px-7 items-start">
                        <h3 className='font-bold text-2xl text-[#0E2368]'>Grilled  Tomatoes at Home</h3>
                        <p>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                        <button className='px-8 py-3 border-black border-2 text-black rounded-full'>Read More</button>
                    </div>
    </div>
  )
}

export default SlideCard
