import React from 'react';
import { useContext } from 'react';
import { MovieContext } from '../MovieContext';
import Title from '../components/Title';

// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};


const MovieFilter = ({ movies }) => {
    // react hooks
    const context = useContext(MovieContext);
    const {handleChange, mainGenre, duration, minDuration, maxDuration, movieName} = context;
  
    // get unique types
    let genres = getUnique(movies, 'mainGenre');
    // add all
    genres = ['Alle', ...genres];
    // map to jsx
    genres = genres.map((item, index) => (
      <option key={index} value={item}>{item}</option>
    ));

    return (
      <section className="filter-container">
        <Title title="Filter" />
        <form className="filter-form">
            {/*select name */}
            <div className="form-group">
                <label htmlFor="movieName">Filmname</label>
                <input type="text" name="movieName" id="movieName" value={movieName} className="form-control" onChange={handleChange} />
            </div>
            {/* end select name*/}
            {/*select genre */}
            <div className="form-group">
                <label htmlFor="mainGenre">Genre</label>
                <select name="mainGenre" id="mainGenre" value={mainGenre} className="form-control" onChange={handleChange}>
                    {genres}
                </select>
            </div>
            {/* end select genre*/}
            {/*duaration */}
            <div className="form-group">
                <label htmlFor="duration">Filmlänge: {duration}</label>
                <input type="range" name="duration" min={minDuration} max={maxDuration} id="duration" value={duration} onChange={handleChange} className="form-control"/>
            </div>
            {/* end duration */}
        </form>
      </section>
    );
  };
  
  export default MovieFilter;

