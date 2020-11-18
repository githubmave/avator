import React from 'react'
import bookData from '../../data/answbook'

import {Link} from 'react-router-dom'

import replList from '../../data/replyers'
import answsArr from '../../data/answs'
import quesList from '../../data/quess'







const Answbook = (props) => {

     let answList = Object.keys(bookData)

    // let {name} = match.params
   // const answArr = bookData[name].myAnsws
   //  console.log("answer list: ", answList)
     
     
     

   return(
     <div className="beer">   
       
        <p className="name">Name in Answbook </p>
        

        <ul  >
            {answList.map((name,i)=>{
             
                return <li className="name" key={i}><Link to = {`/answList/${name}`}>{name}</Link></li>

            })}                

         </ul>


    </div>
      
   )
}

export default Answbook



            // {/* show replyers */}
            // {replList.map((repl,i)=>{

                            
            //     return <li key={i}>{repl}</li>
    
            //     })}
    
            //      {/* show answs */}
            //      {answsArr.map((answ,i)=>{
    
                                              
            //       return <li key={i}>{answ}</li>
    
            //       })}