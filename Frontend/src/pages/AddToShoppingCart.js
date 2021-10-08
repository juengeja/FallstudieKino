import React, {Component} from 'react';
import { MovieContext } from '../MovieContext';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import BookMySeats from '../components/BookMySeats';
import { connect } from 'react-redux';
import { addToCart,addItem} from '../components/actions/cartActions';
import axios from 'axios';
import { Link } from 'react-router-dom'

 class AddToShoppingCart extends Component {
    constructor(props){
        super(props);

        this.state = {
            slug: this.props.match.params.slug,
            events: [],
            cart_entry_event: '',
            showPopup: false,
            error: false
        };
    }

    
    componentDidMount(){
            //xios.get('http://5.45.107.109:4000/api/eventdata')
            axios.get('http://5.45.107.109:4000/api/moviedata')
            .then((response) => {
                let events = this.formatData(response.data);
                this.setState({
                    events,
                })
            });
    };
        
    formatData(items){
            let tempItems = items.map(item  =>{
            let id = item.movieId;
            let event = {...item, id};
            return event;
        });
    return tempItems;
    }
    
    handleSubmit = (entry)=>{
      if(entry.event === '' || entry.seats === ''){
        alert('Nicht alles ausgefüllt')
      }else if(this.props.items.find(item=> item.movie === entry.movie && item.event === entry.event)){
        alert('Diese Vorstellung mit diesem Film befindet sich bereits im Warenkorb')
      }else{
        this.props.addItem(entry);
        this.props.addToCart(entry.id);
        this.setState({
          showPopup: !this.state.showPopup
        })
      }
  }


    handleEventPicker(newEvent){
        this.setState(prevState => {
            let cart_entry_event = Object.assign({}, prevState.cart_entry_event);
            cart_entry_event = newEvent;                                    
            return { cart_entry_event };                         
          })
    };

    static contextType = MovieContext;

    render() {
        const {getMovie} = this.context;
        const movie = getMovie(this.state.slug);
        if(!movie){
            return (
            <div className="error">
                <h3>Ein Fehler ist aufgetreten</h3>
            </div>
            );
        }
    
        const {name, presentation_date, img} = movie;

        //Change Hardcoded values
        var entry = { id: this.props.items.length, event: this.state.cart_entry_event, movie: name, seats: "2A", price: "8", img: img}
        return (
           <>
            
            <Hero hero = 'programHero'>
                <Banner title={name}>
                </Banner>
            </Hero>   
     
            <div className="movie-extras">
                <h6>Vorführungsdatum - Bitte auswählen!</h6>
 
                {presentation_date.map((item) =>{
                         return <button class="btn-primary" value={item} onClick={ () => { this.handleEventPicker(item)}  }>- {item}</button>
                })}

                <BookMySeats/>
        
                <h6>Zusammenfassung der Auswahl</h6>  
                <h6>Event: {entry.event}</h6>
                <h6>Film: {entry.movie}</h6>
                <h6>Sitze: {entry.seats}</h6>

                <button onClick={()=>{this.handleSubmit(entry)}} class="btn-primary">Zum Warenkorb hinzufügen</button>      
                {this.state.showPopup ? <Popup/> : null}
            </div>
            </>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }

const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        addItem: (id)=>{dispatch(addItem(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddToShoppingCart)

class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h6>Die Auswahl wurde erfolgreich zum Warenkorb hinzugefügt!</h6>
          <Link to='/shoppingCart' className="btn-primary">Zum Warenkorb</Link>
          <Link to='/program' className="btn-primary">Weiteren Film hinzufügen</Link>
        </div>
      </div>
    );
  }
}


