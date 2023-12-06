import React from 'react'
import SingleCategoryRecipe from './SingleCategoryRecipe'


function CategoryRecipe() {
  return (
    <div className='main-category'>
        <SingleCategoryRecipe name={'Dessert'} image="dessert.jpg" />
        <SingleCategoryRecipe name={'Salad'} image="salad.jpg" />
        <SingleCategoryRecipe name={'Soup'} image="soup.jpg" />
        <SingleCategoryRecipe name={'30 Min Meal'} image="30minmeal.jpg" />
        <SingleCategoryRecipe name={'Breakfast'} image="breakfast.jpg" />
        <SingleCategoryRecipe name={'Appetizer'} image="appetizer.jpg" />
        <SingleCategoryRecipe name={'Main Course '} image="maincourse.jpg" />
        <SingleCategoryRecipe name={'Sides '} image="sidemeal.jpg" />
        <SingleCategoryRecipe name={'All Recipes '} image="allrecipes.jpg" />
    </div>
  )
}

export default CategoryRecipe