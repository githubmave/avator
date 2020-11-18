
import React from 'react'
import {Route, Link} from 'react-router-dom'

import SpeciesListing from './SpeciesListing'

import ranks from '../../data/ranks'

const Rank = ({match}) => {
  const {rank, name} = match.params
  const eachRank = ranks[rank].filter(item => item.name === name)[0]

  return (
    <div className='rank-listing'>
      <h2>{name}</h2>
      <p>{eachRank.description}</p>
      <Link to={`${match.url}/species`}>Show species or Description</Link>
      <Route path='/rank/:rank/:name/species' component={Description} />
    </div>
  )
}

export default Rank
