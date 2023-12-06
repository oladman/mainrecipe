import React from 'react'
import Listpost from './Listpost'
import { ImFire } from "react-icons/im";



function List() {
  return (
    <>
<div className="latest-post-header">
          <h2 className='list-hot'>
            HOTS <ImFire style={{ color:'#ff5a00' }} />
          </h2>
        </div>
    <Listpost />
    </>
  )
}

export default List