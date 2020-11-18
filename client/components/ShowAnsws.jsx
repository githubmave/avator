import React from 'react'
import bookData from '../../data/answbook'
import {Link} from 'react-router-dom'

const ShowAnsws = ({match}) => {
     let {name,nameIn} = match.params
     const ansArr=bookData[name].myAnsws

     console.log("answers : ",ansArr)
    // const rankArray = ranks[rank]
   
     return (
      <div className="beer">
        <h2>{name} Says</h2>
/            <ul className="name">
                {ansArr.map((ans, i) => {
                
                    return <li className="country" key={i}><Link to = {`/answList/${name}/${ans}`}>{ans}</Link></li>
                
                })
                } 
            </ul>

      </div>
    )  
}
                                    


export default ShowAnsws