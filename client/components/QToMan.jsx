import React from 'react'
import bookData from '../../data/answbook'
import quesList from '../../data/quess'
import quBookData from '../../data/quesbook'
import nameList from '../../data/repliers'


import {Link} from 'react-router-dom'

const QToMan = () => {
    //let {name} = match.params

   // let nameIn = nameList.findIndex( (el) => el==name)
  
     return (
      <div class="beer">

        <p class="name"> Question for the day </p>

        <ul class="country">
                { quesList.map( (ques,id)=> {
                    let index=id.toString()

                   return <li className="name" key={id}><Link to = {`/quesList/${ques}/${index}`}>{ques}</Link></li>

                   })
                } 
        </ul>

      </div>
    )  
}
                                    
export default QToMan