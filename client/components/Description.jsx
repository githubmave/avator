import React from 'react'
import ranks from '../../data/ranks'

import {Link} from 'react-router-dom'


const Description = ({match}) =>{
  let {rank} = match.params
  const rankArray = ranks[rank]
 
   return (
    <div>
          {rankArray.map((item, i) => {
            return (
              <>
              <h2 key={i}>{item.name}</h2>
              <p>{item.description}</p>
              </>
            )
          })
          } 
    </div>
  )  
}


export default Description