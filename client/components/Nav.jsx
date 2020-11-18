import React from 'react'
import ranks from '../../data/ranks'

import {Link} from 'react-router-dom'
 

const Nav = (props) => {
  //makes an array of strings
  let rankList = Object.keys(ranks)
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {rankList.map ((rank, i) => {
          //is the same as 'rank/' + {rank}
          return <li key={i}><Link to = {`/rank/${rank}`}>{rank}</Link></li>
        })
        }
      </ul>
    </div>
  )
}

export default Nav
