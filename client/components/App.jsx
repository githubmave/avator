import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
// import Nav from './Nav'
// import Home from './Home'
// import ShowRank from './ShowRank'
// import Description from './Description'
import Answbook from './Answbook'
import  ShowAnsws from './ShowAnsws'
import  ManToQ from './ManToQ'


// import bookData from '../../data/answbook'



const App = () => {
  return (
    <>
   
    
    <Router>
    
      <div class ='beer'>
       
        <Answbook />
      
       
        <p class="name">
          <Route path='/answList/:name' component={ManToQ}/>
        </p>
        <p class="country">
          <Route path='/answList/:name/:index' component={ShowAnsws} />
        </p>
       
      </div>
    </Router>
    </>
  )
}

export default App
