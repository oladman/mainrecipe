import React from 'react'
import SingleCategoryRecipe from './SingleCategoryRecipe'
import { Link } from 'react-router-dom'



function CategoryRecipe() {
  return (
    <div className='main-category'>
        <Link to="/page/dessert" style={{ textDecoration:"none", color:"black" }}><SingleCategoryRecipe name={'Dessert'} image="dessert.jpg" /> </Link>
        <Link to="/page/salad" style={{ textDecoration:"none", color:"black" }}><SingleCategoryRecipe name={'Salad'} image="salad.jpg" /></Link>
        <Link to="/page/soup" style={{ textDecoration:"none", color:"black" }}><SingleCategoryRecipe name={'Soup'} image="soup.jpg" /></Link>
        <Link to="/page/30-mins-meal" style={{ textDecoration:"none", color:"black" }}><SingleCategoryRecipe name={'30 Min Meal'} image="30minmeal.jpg" /></Link>
        <Link to="/page/breakfast" style={{ textDecoration:"none", color:"black" }}><SingleCategoryRecipe name={'Breakfast'} image="breakfast.jpg" /></Link>
        <Link to="/page/appetizer" style={{ textDecoration:"none", color:"black" }}><SingleCategoryRecipe name={'Appetizer'} image="appetizer.jpg" /></Link>
        <Link to="/page/main-course" style={{ textDecoration:"none", color:"black" }}><SingleCategoryRecipe name={'Main Course '} image="maincourse.jpg" /></Link>
        <Link to="/page/sides" style={{ textDecoration:"none", color:"black" }}><SingleCategoryRecipe name={'Sides '} image="sidemeal.jpg" /></Link>
        <Link to="/page/recipe" style={{ textDecoration:"none", color:"black" }}> <SingleCategoryRecipe name={'All Recipes '} image="allrecipes.jpg" /></Link>
    </div>
  )
}

export default CategoryRecipe