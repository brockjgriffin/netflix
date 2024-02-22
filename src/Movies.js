import React from 'react'
import './Movies.css'
import MovieRow from './MovieRow'
import endpoints from './requests'

function Movies() {
  return (
    <div className="movies">
        <MovieRow title={'Popular'} fetchUrl={endpoints.popular} />
        <MovieRow title={'Upcoming'} fetchUrl={endpoints.upcoming} />
        <MovieRow title={'Top rated'} fetchUrl={endpoints.topRated} />
        <MovieRow title={'Trending'} fetchUrl={endpoints.trending} />
        <MovieRow title={'Action'} fetchUrl={endpoints.action} />
        <MovieRow title={'Comedy'} fetchUrl={endpoints.comedy} />
        <MovieRow title={'Documentary'} fetchUrl={endpoints.documentary} />
        <MovieRow title={'Horror'} fetchUrl={endpoints.horror} /> 
        <MovieRow title={'Romance'} fetchUrl={endpoints.romance} />

    </div>
  )
}

export default Movies