import React from 'react'
import './Menu.css'
import Card from './Card'

const Menu = () => {
  return (
    <>
    <div className='menu-container'>
        <h1>Menu</h1>
    </div>
    <Card imagepath="hakka-noodles-recipe.jpg" content="From humble strands to a world of delight,
Noodles offer comfort, morning, noon, and night."></Card>
    </>
  )
}

export default Menu