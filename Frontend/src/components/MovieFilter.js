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
    const {handleChange, genre, free_seats, minSeats, maxSeats, duration, minDuration, maxDuration, menu, night_event} = context;

    //get unique genres
    let genres = getUnique(movies, 'genre');
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
                <select name="genre" id="genre" value={genre} className="form-control" onChange={handleChange}>
                    {genres}
                </select>
            </div>
            {/* end select genre*/}
            {/*seats */}
            <div className="form-group">
                <label htmlFor="free_seats">Freie Plätze: {free_seats}</label>
                <input type="range" name="free_seats" min={minSeats} max={maxSeats} id="free_seats" value={free_seats} onChange={handleChange} className="form-control"/>
            </div>
            {/* end seats */}
            {/*duaration */}
            <div className="form-group">
                <label htmlFor="duration">Filmlänge: {duration}</label>
                <input type="range" name="duration" min={minDuration} max={maxDuration} id="duration" value={duration} onChange={handleChange} className="form-control"/>
            </div>
            {/* end duration */}
            {/*extras */}
            <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox" name="menu" id="menu" checked={menu} onChange={handleChange}/>
                    <label htmlFor="menu">Im Menü</label>
                </div>
                <div className="single-extra">
                    <input type="checkbox" name="night_event" id="night_event" checked={night_event} onChange={handleChange}/>
                    <label htmlFor="night_event">Nachtaufführung</label>
                </div>
            </div>
            {/* end extras */}
        </form>
    </section>
    );
}