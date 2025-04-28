import React from 'react'
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/salad-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
  const dessert = menu.filter(item => item.category === "dessert")
  const salad = menu.filter(item => item.category === "salad")
  const soup = menu.filter(item => item.category === "soup")
  const pizza = menu.filter(item => item.category === "pizza")
  const offered = menu.filter(item => item.category === "offered")
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover title={"Our Menu"} img={menuImg}></Cover>,
      {/* main cover */}
      <SectionTitle heading={"Today's Offer"} subHeading={"Don't Miss"}></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory items={dessert} title={"dessert"} coverImg={dessertImg}></MenuCategory>
      <MenuCategory items={pizza} title={"pizza"} coverImg={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title={"salad"} coverImg={saladImg}></MenuCategory>
      <MenuCategory items={soup} title={"soup"} coverImg={soupImg}></MenuCategory>

    </div>
  )
}

export default Menu
