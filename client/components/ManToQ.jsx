import React from 'react'
//import ranks from '../../data/ranks'
import bookData from '../../data/answbook'
import quesList from '../../data/quess'
import {Link} from 'react-router-dom'

const ManToQ = () => {
     
    console.log("questions are:  ", quesList)
     
   
     return (
      <div className="beer">

        
        <li>Have you ever been in iglpp?</li>

        <ul className="name">
                { quesList.map( (ques,i)=> {

                   return <li key={i}  >{ques}</li>
                })
                } 
        </ul>

      </div>
    )  
}
                                    


export default ManToQ