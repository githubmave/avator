import React from 'react'
import bookData from '../../data/answbook'
import quesList from '../../data/quess'

import {Link} from 'react-router-dom'

const ShowAnsws = ({match}) => {
     let {name,index} = match.params
     const ansArr=bookData[name].myAnsws
     let quesId = Number(index)

     let quOfMan = quesList[quesId]
     const ansForMan=ansArr[quesId]

   
     return (
      <div className="beer">
        <h2 className="name"> Answer from {name} for {quOfMan} </h2>
            <ul className="name">
                  <li className="country">{ansForMan}</li>
            </ul>

      </div>
    )  
}
                                    


export default ShowAnsws