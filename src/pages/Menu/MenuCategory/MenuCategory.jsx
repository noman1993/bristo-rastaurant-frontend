import React from 'react'
import MenuItem from '../../Shared/MenuItem/MenuItem'
import Cover from '../../Shared/Cover/Cover'
import { Link } from 'react-router-dom'

const MenuCategory = ({items, title,coverImg}) => {
  return (
    <div className='pt-8'>
        {title && <Cover title={title} img={coverImg}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}><button className="btn btn-soft my-4 border-0 border-b-2 border-amber-300">Order Now</button></Link>
    </div>
  )
}

export default MenuCategory
