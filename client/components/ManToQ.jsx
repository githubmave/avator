import React from 'react'
import bookData from '../../data/answbook'
//import quesList from '../../data/quess'
import quBookData from '../../data/quesbook'

import {Link} from 'react-router-dom'

const ManToQ = () => {


    let  quesList= Object.keys(quBookData)
   
     return (
      <div className="beer">

        
        <li>Have you ever been in iglpp?</li>

        <ul className="name">
                { quesList.map( (ques,i)=> {

                   return <li key={i}  ><Link >{ques}</Link></li>
                   })
                } 
        </ul>


      </div>
    )  
}
                                    
export default ManToQ