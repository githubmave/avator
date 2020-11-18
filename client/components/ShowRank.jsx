import React from 'react'
import ranks from '../../data/ranks'

import {Link} from 'react-router-dom'

const ShowRank = ({match}) => {
    let {rank} = match.params
    const rankArray = ranks[rank]
   
     return (
      <div>
        <h2>{rank}</h2>
          <ul>
            {rankArray.map((item, i) => {
              return <li key={i}><Link to = {`/rank/${rank}/${item.name}`}>{item.name}</Link></li>
            })
            } 
        </ul>
      </div>
    )  
}



export default ShowRank

// in app.js
//import JediList from './JediList'
//<Router />JediList</Router> don't forget to import
//make file Jedi.jsx - import react
// function or class? - function unless state required
// function Jedilist(props) {
    //return <div>Jedi</div>
//}
// export default JediList

//at top of JediList.jsx
// make const jedis = [{
//    name: 'Luke',
//    force: 'LIGHT'
//    },
//     {name: 'Darth Maul',
//     force: 'DARK'  
//}]

// make map inside li -  
//  return - {jedis.map(jedi => <li>)}
// {jedi.name} : {jedi.force}
//  </li>

// in app.jsx make link
// inside Router - <Link to='/jedis/light'>Goodies</Link>
// listening for that router = <Route path='/jedis/:force' component={JediList} />

// in jediList.jsx use match to get the params
//above return - let {force} = props.match.params

// change return to {jedis.filter(jedi => jedi.force == force).map(jedi => <li>
// {jedi.name} : {jedi:force})}