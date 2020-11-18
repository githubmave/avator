import React from 'react'
import bookData from '../../data/answbook'
import quesList from '../../data/quess'
import quBookData from '../../data/quesbook'
import nameList from '../../data/repliers'


import {Link} from 'react-router-dom'

const QToMan = ({match}) => {
    let {ques} = match.params

   let quesIn = quesList.findIndex( (el) => el==ques)
  
     return (
      <div class="beer">

        <p class="name"> Question for the day </p>

        <ul class="country">
                { nameList.map( (name,id)=> {
                    let index=id.toString()

                   return <li className="name" key={id}><Link to = {`/quesList/${ques}/${index}`}>{name}</Link></li>

                   })
                } 
        </ul>

      </div>
    )  
}
                                    
export default QToMan