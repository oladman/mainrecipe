import React from 'react'
import './Layout.css'
import { MdFormatAlignJustify } from 'react-icons/md'
import{ Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
    <div className='inner-footer'>
<div className='footer-recipe'><img  style={{ width:'150px' }} src='/therecipelogo.png' />
<p className='footer-p'>We create possibilities <br/> for the connected world. <br/> <p style={{ fontWeight:'700' }}>BE BOLD.</p></p>
</div>
<div className='footer-recipe'>
    <p className='footer-p-up'>Explore</p>
    <p className='footer-p'>Home</p>
    <p className='footer-p'>About</p>
    <p className='footer-p'>Careers</p>
</div>
<div className='footer-recipe'>
<p className='footer-p-up'>Follow</p>
    <p className='footer-p'>Instagram</p>
    <p className='footer-p'>Twitter (X)</p>
    <p className='footer-p'>LinkedIn</p>
</div>
<div className='footer-recipe'>
<p className='footer-p-up'>Legal</p>
    <p className='footer-p'>Terms</p>
    <p className='footer-p'>Privacy</p>
    
</div>
<div className='footer-recipe'>
<p className='footer-p-up'>Advertise With Us</p>
    <p className='footer-p'>Know More</p>
    <p className='footer-p'>Therecipe2023@gmail.com</p>
   
</div>

<div className='footer-recipe'>
<p className='footer-p-up'>Add a Recipe</p>
    <button className='footer-button'><Link style={{ textDecoration:'none', color:'red' }} to='/post-recipe'>ADD RECIPE</Link></button>
    
   
</div>


</div>
<div className='M-footer'>
    <div className='footer-recipe'><img  style={{ width:'150px' }} src='/therecipelogo.png' />
<p className='footer-p'>We create possibilities <br/> for the connected world. <br/> <p style={{ fontWeight:'700' }}>BE BOLD.</p></p>
</div>
<div className='li-footer'> <p className='footer-p-up'>Explore</p>
<p className='footer-p-up'>Follow</p>
<p className='footer-p-up'>Legal</p>
<p className='footer-p-up'>Advertise With Us</p>

</div>
</div>
<p className='footer-p'>©2023 TheRecipe, All Rights Reserved.</p>
    </div>
    
  )
}

export default Footer