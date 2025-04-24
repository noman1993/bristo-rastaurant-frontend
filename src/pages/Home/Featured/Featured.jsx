import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
  return (
    <div className='featured-item bg-fixed text-white pt-8 my-20'>
      <SectionTitle heading={"featured item"} subHeading={"Chack It Out"}></SectionTitle>
      <div className='md:flex md:space-x-4 justify-center items-center py-10 px-24'>
        <div>
            <img src={featured} alt="" />
        </div>
        <div >
            <p>Aug,20,2029</p>
            <p className='uppercase'>Where can i get some?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero corrupti nulla reprehenderit? Nam consequatur recusandae ea atque, placeat doloremque harum molestias eos aperiam! Ipsam, unde? Mollitia blanditiis sequi iusto veritatis recusandae nostrum sapiente exercitationem nulla aliquid beatae voluptatum aut neque ex, numquam facilis saepe dolorum aspernatur sit odio magnam consectetur?</p>
            <button className="btn btn-soft my-4 border-0 border-b-2 border-amber-300">Order Now</button>

        </div>
      </div>
    </div>
  )
}

export default Featured
