import React from 'react'
import bookData from '../../data/answbook'

import {Link} from 'react-router-dom'

import replList from '../../data/replyers'
import answsArr from '../../data/answs'






const Answbook = (props) => {

     let answList = Object.keys(bookData)

    // let {name} = match.params
   // const answArr = bookData[name].myAnsws
   //  console.log("answer list: ", answList)
     
     
     

   return(
     <div class="beer">   
       
        <p class="name">Name in Answbook </p>
        

        <ul  >
            {answList.map((name,i)=>{

                

                
                return <li class="name" key={i}><Link to = {`/answList/${name}`}>{name}</Link></li>
                // return <li key={i}><Link to = {`/rank/${rank}/${item.name}`}>{item.name}</Link></li>


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