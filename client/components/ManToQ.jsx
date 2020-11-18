import React from 'react'
import bookData from '../../data/answbook'
//import quesList from '../../data/quess'
import quBookData from '../../data/quesbook'
import nameList from '../../data/repliers'


import {Link} from 'react-router-dom'

const ManToQ = ({match}) => {
    let {name} = match.params

    let nameIn = nameList.findIndex( (el) => el==name)
      
    console.log("index of name", name , nameIn   )
          

    let  quesList= Object.keys(quBookData)
   
     return (
      <div className="beer">

        
        <li>Have you ever been in igloo?</li>

        <ul className="name">
                { quesList.map( (ques,i)=> {

                   return <li key={i}><Link to = {`/answList/${name}/${nameIn}`}>{ques}</Link></li>

                   })
                } 
        </ul>


      </div>
    )  
}
                                    
export default ManToQ