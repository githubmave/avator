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
      {/* <h1>Navigating the taxonomic routes</h1> */}
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div class ='beer'>
        {/* <Nav />
       
        <Home /> */}
        <Answbook />
        <ManToQ />
        {/* <ShowAnsws /> */}
       
        <p class="description">
          <Route path='/answList/:name' component={ShowAnsws}/>
        </p>
        {/* <Route path='/rank/:rank' component={ShowRank}/>
        <Route path='/rank/:rank/:name' component={Description} /> */}
      </div>
    </Router>
    </>
  )
}

export default App
