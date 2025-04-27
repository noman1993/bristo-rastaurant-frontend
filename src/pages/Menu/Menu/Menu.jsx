import React from 'react'
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/salad-bg.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu'

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover title={"Our Menu"} img={menuImg}></Cover>
      <PopularMenu></PopularMenu>
      <Cover title={"Our Menu"} img={menuImg}></Cover>
      <PopularMenu></PopularMenu>
      <Cover title={"Our Menu"} img={menuImg}></Cover>
      <PopularMenu></PopularMenu>
    </div>
  )
}

export default Menu
