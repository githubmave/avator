import React from 'react'
import bookData from '../../data/answbook'

import {Link} from 'react-router-dom'

import replList from '../../data/repliers'
import answsArr from '../../data/answs'
import quesList from '../../data/quess'
import quBookData from '../../data/quesbook'


const Answbook = (props) => {

     let answList = Object.keys(bookData)
 
  return(
     <div className="beer">   
       
        
        

        <ul  className="name">
            {answList.map((name,i)=>{
             
                return <li className="country" key={i}><Link to = {`/answList/${name}`}>{name}</Link></li>

            })}                

         </ul>


    </div>
      
   )
}

export default Answbook

