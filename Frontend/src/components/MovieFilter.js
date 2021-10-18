import React from 'react';
import { useContext } from 'react';
import { MovieContext } from '../MovieContext';
import Title from '../components/Title';

// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

export default function ProgramContainer({movies}) {
    const context = useContext(MovieContext);
    const {handleChange, mainGenre, duration, minDuration, maxDuration} = context;

    //get unique genres
    let genres = getUnique(movies, 'mainGenre');
    //add all
    genres = ['Alle' , ...genres];
    //map to jsx
    genres = genres.map((item, index) =>{
        return <option value={item} key={index}>{item}</option>;
    }) 

    return (
    <section className="filter-container">
        <Title title="Filter" />
        <form className="filter-form">
            {/*select genre */}
            <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <select name="genre" id="genre" value={mainGenre} className="form-control" onChange={handleChange}>
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
}