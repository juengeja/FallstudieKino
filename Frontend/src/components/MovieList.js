import React from 'react';
import Movie from './Movie';


const MovieList = ({ movies }) => {
    if (movies.length === 0) {
      return (
        <div className="empty-search">
          <h3>Keine Filme mit diesen Filtern</h3>
        </div>
      );
    }
    return (
        <section className="movielist">
            <div className="movielist-center">
            {movies.map(item => {
                    return <Movie key={item.id} movie={item} />;
                })}
        </div>
      </section>
    );
  };
  
  export default MovieList;
