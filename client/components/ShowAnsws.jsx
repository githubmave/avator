import React from 'react'
//import ranks from '../../data/ranks'
import bookData from '../../data/answbook'


import {Link} from 'react-router-dom'

const ShowAnsws = ({match}) => {
     let {name} = match.params
     const ansArr=bookData[name].myAnsws

     console.log("answers : ",ansArr)
    // const rankArray = ranks[rank]
   
     return (
      <div class="beer">
        <h2>{name} Says</h2>
/            <ul class="name">
                {ansArr.map((ans, i) => {
                
                    return <li class="country" key={i}><Link to = {`/answList/${name}/${ans}`}>{ans}</Link></li>
                
                })
                } 
            </ul>

      </div>
    )  
}
                                    


export default ShowAnsws