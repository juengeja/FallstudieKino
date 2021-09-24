import React from 'react';
import { useContext } from 'react';
import { MovieContext } from '../context';
import Title from '../components/Title';
// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

export default function ProgramContainer({movies}) {
    const context = useContext(MovieContext);
    const {handleChange, genre, free_seats, minSeats, maxSeats, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = context;
    //const {name,description,free_seats,release_date,duration,extras,menu,night_event,trailer,images} = movie;
    //get unique genres
    let genres = getUnique(movies, 'genre');
    //add all
    genres = ['all' , ...genres];
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
            {/* end selecct genre*/}
            {/*seats */}
            <div className="form-group">
                <label htmlFor="free_seats">Freie Plätze</label>
                <input type="range" name="free_seats" min={minSeats} max={maxSeats} id="price" value={free_seats} onChange={handleChange} className="form-control"/>
            </div>
            {/* end seats */}
            {/* room price */}
            <div className="form-group">
                <label htmlFor="price">Preis {price}€</label>
                <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
            </div>
            {/* end room price */}
            {/*size */}
            <div className="form-group">
                <label htmlFor="size">Raumgröße</label>
                <div className="size-inputs">
                    <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                    <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                </div>
            </div>
            {/* end size */}
            {/*extras */}
            <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                    <label htmlFor="breakfast">Frühstück</label>
                </div>
                <div className="single-extra">
                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                    <label htmlFor="pets">Tiere</label>
                </div>
            </div>
            {/* end extras */}
        </form>
    </section>
    );
}