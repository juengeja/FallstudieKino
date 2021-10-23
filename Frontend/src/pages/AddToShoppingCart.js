import React,{ Component } from 'react';
import { MovieContext } from '../MovieContext';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { connect } from 'react-redux';
import { addToCart, addItem } from '../components/actions/cartActions';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddToShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      events: [],
      cart_entry_event: '',
      cart_entry_eventRoom: '',
      cart_entry_eventID: '',
      showSuccessfulPopup: false,
      showErrorPopup: false,
      error: false,
      bookedSeats:[]
    };
  }

  componentDidMount() {
    let url = 'http://5.45.107.109:4000/api/moviedata/showeventdates/' + this.state.slug;
    axios.get(url)
      .then((response) => {
        let events = this.formatData(response.data);
        this.setState({
          events,
        })
      });
  };

  formatData(items) {
    let tempItems = items.map(item => {
      let showEventID = item.showEventID;
      let eventStart = item.eventStart;
      let event = { ...item, eventStart, showEventID };
      return event;
    });
    return tempItems;
  }

  handleSubmit(entry){
    if (entry.event === '' || entry.seats === '') {
      alert('Event oder Sitzplatz wurde nicht  ausgewählt')
    } else if (this.props.items.find(item => item.movie === entry.movie && item.event === entry.event)) {
      alert('Diese Vorstellung mit diesem Film befindet sich bereits im Warenkorb')
    } else {
      
      const seat_reservation_post = {
        bookingID: entry.bookingID,
        showEventInfo: entry.eventID,
        seatInfo: entry.seats
      }

      axios.post('http://5.45.107.109:4000/api/reservation', seat_reservation_post)
        .then(res => {
          if (res.data != null) {
            if (res.data.bookingStatus === "reserved") {
              this.props.addItem(entry);
              this.props.addToCart(entry.id);
              this.setState({
              showSuccessfulPopup: !this.state.showSuccessfulPopup
            })
            console.log(res.data)
          }else{
              this.setState({
              showErrorPopup: !this.state.showErrorPopup
            })}
          }else{
            alert("Ein Fehler ist aufgetreten")
          }
        })   
    }
  }


handleEventPicker(newEvent){
  let SeatArr = Object.entries(newEvent.seatingTemplateInfo.seatMap)
  let booked = []
  let room = newEvent.seatingTemplateInfo.eventRoomID

  SeatArr.map(seat => {
    if(seat[1].booked)
    booked = [...booked, seat[0]]
  })
  console.log(booked)


  this.setState({
    cart_entry_eventID: newEvent.showEventID,
    bookedSeats: booked,
    cart_entry_eventRoom: room
  })
  
  this.setState(prevState => {
    let cart_entry_event = Object.assign({}, prevState.cart_entry_event);
    cart_entry_event = newEvent.eventStart;
    return { cart_entry_event };
  })
};

static contextType = MovieContext;
   
render() {
  
  const { getMovie } = this.context;
  const movie = getMovie(this.state.slug);
  if (!movie) {
    return (
      <div className="error">
        <h3>Ein Fehler ist aufgetreten</h3>
      </div>
    );
  }

  const { movieName, img } = movie;

  //Change Hardcoded values 
  var entry = { id: this.props.items.length, bookingID: Date().toLocaleString('de-DE'), event: this.state.cart_entry_event, eventID: this.state.cart_entry_eventID, eventRoom:this.state.cart_entry_eventRoom, movie: movieName, seats: '', price: 8, img: img }
  
  const GenerateSeats = (seatNumbers) => {  
    return (
      <div className="row">
        {
          seatNumbers.map((seatNumber) => {
            return <Seat seatno={seatNumber} key={seatNumber} />
          })
        }
      </div>
    )
  }
  
  const Seat = (props) => {  

    const seatNumber = props.seatno
    let seatStatus = ""
    let roomId = this.state.cart_entry_eventRoom

    if(this.state.bookedSeats.includes(roomId+seatNumber)){ 
    seatStatus = props.seatColor ? props.seatColor : "seat-black"
    }else{
    seatStatus = props.seatColor ? props.seatColor : "seat-grey"
    }

    const seatClickHandler = (event, seatNumber) => {
      event.stopPropagation()
      const seatColor = document.querySelector(`.seat-${seatNumber}`).classList
      console.log(this.state.bookedSeats)
      if (entry.seats.includes(roomId+seatNumber)) {
  
        seatColor.remove("seat-red")
        seatColor.add("seat-grey")
        let newArr = entry.seats.filter(e => e !== roomId+seatNumber)
        entry.seats = newArr

      } else if(this.state.bookedSeats.includes(roomId+seatNumber)){
        //damit nicht ausgewählt werden kann
        seatColor.add("seat-black")

      } else {
        seatColor.remove("seat-grey")
        seatColor.add("seat-red")
        entry.seats = [...entry.seats, roomId+seatNumber]
      }
      console.log(entry)
    }
  
    return (
      this.state.bookedSeats.includes(roomId+seatNumber) ? 
        <div className="col-2 col-md-2">
          <div className={`bookedseat seat-${seatNumber} ${seatStatus}`}/>
        </div>
      : 
        <div className="col-2 col-md-2">
          <div className={`seat seat-${seatNumber} ${seatStatus}`}
          onClick={(e) => seatClickHandler(e, props.seatno)} />
        </div>
    )
  }


  const SeatMatrix = () => {
    return (
      <>
        <div className="movie-complex">
          <p className="leinwand">Leinwand</p>
          <div className="container row movie-layout">
            <div className="movie-column-1">
              {GenerateSeats(['A1', 'A2', 'A3', 'A4', 'A5'])}
              {GenerateSeats(['B1', 'B2', 'B3', 'B4', 'B5'])}
              {GenerateSeats(['C1', 'C2', 'C3', 'C4', 'C5'])}
              {GenerateSeats(['D1', 'D2', 'D3', 'D4', 'D5'])}
              {GenerateSeats(['E1', 'E2', 'E3', 'E4', 'E5'])}
              {GenerateSeats(['F1', 'F2', 'F3', 'F4', 'F5'])}
              {GenerateSeats(['G1', 'G2', 'G3', 'G4', 'G5'])}
              {GenerateSeats(['H1', 'H2', 'H3', 'H4', 'H5'])}
              {GenerateSeats(['J1', 'J2', 'J3', 'J4', 'J5'])}
              {GenerateSeats(['K1', 'K2', 'K3', 'K4', 'K5'])}
            </div>
            <div className="gang">hallo</div>
            <div className="movie-column-2">
              {GenerateSeats(['A6', 'A7', 'A8', 'A9', 'A10'])}
              {GenerateSeats(['B6', 'B7', 'B8', 'B9', 'B10'])}
              {GenerateSeats(['C6', 'C7', 'C8', 'C9', 'C10'])}
              {GenerateSeats(['D6', 'D7', 'D8', 'D9', 'D10'])}
              {GenerateSeats(['E6', 'E7', 'E8', 'E9', 'E10'])}
              {GenerateSeats(['F6', 'F7', 'F8', 'F9', 'F10'])}
              {GenerateSeats(['G6', 'G7', 'G8', 'G9', 'G10'])}
              {GenerateSeats(['H6', 'H7', 'H8', 'H9', 'H10'])}
              {GenerateSeats(['J6', 'J7', 'J8', 'J9', 'J10'])}
              {GenerateSeats(['K6', 'K7', 'K8', 'K9', 'K10'])}
            </div>
            <div className="gang">hallo</div>
            <div className="movie-column-3">
              {GenerateSeats(['A11', 'A12', 'A13', 'A14', 'A15'])}
              {GenerateSeats(['B11', 'B12', 'B13', 'B14', 'B15'])}
              {GenerateSeats(['C11', 'C12', 'C13', 'C14', 'C15'])}
              {GenerateSeats(['D11', 'D12', 'D13', 'D14', 'D15'])}
              {GenerateSeats(['E11', 'E12', 'E13', 'E14', 'E15'])}
              {GenerateSeats(['F11', 'F12', 'F13', 'F14', 'F15'])}
              {GenerateSeats(['G11', 'G12', 'G13', 'G14', 'G15'])}
              {GenerateSeats(['H11', 'H12', 'H13', 'H14', 'H15'])}
              {GenerateSeats(['J11', 'J12', 'J13', 'J14', 'J15'])}
              {GenerateSeats(['K11', 'K12', 'K13', 'K14', 'K15'])}
            </div>
          </div>
        </div>
  
        <p>
          <div className="abstand">hallo</div>
          <div className="row">Frei: <Seat seatColor="seat-grey"/> Belegt: <Seat seatColor="seat-black"/> Gewählt: <Seat seatColor="seat-red" /></div>
          <div className="abstand">hallo</div>
        </p>
      </>
    )
  
  }  
  
  return (
    <>

      <Hero hero='programHero'>
        <Banner title={movieName}>
        </Banner>
      </Hero>
      <div className="addToCart-Container">
        <h6>Bitte eine Vorstellung auswählen:</h6>

        {this.state.events.map((item) => {
          return <button className={this.state.cart_entry_eventID !== '' ? "booking-btn" : "booking-btn-unselected"} value={item.eventStart} onClick={() => { this.handleEventPicker(item) }}>{item.eventStart}</button>
        })}

        {this.state.cart_entry_eventID === '' ? null : <SeatMatrix />}
        
        <button onClick={() => { this.handleSubmit(entry) }} class="btn-primary">Zum Warenkorb hinzufügen</button>
        {this.state.showSuccessfulPopup ? <SuccessfulPopup /> : null}
        {this.state.showErrorPopup ? <ErrorPopup /> : null}
      </div>
    </>
  );
}
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (id) => { dispatch(addToCart(id)) },
    addItem: (id) => { dispatch(addItem(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToShoppingCart)

class SuccessfulPopup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h6>Der Film wurde erfolgreich zum Warenkorb hinzugefügt!</h6>
          <Link to='/shoppingCart' className="btn-primary">Zum Warenkorb</Link>
          <h3 />
          <Link to='/program' className="btn-primary">Weiteren Film hinzufügen</Link>
        </div>
      </div>
    );
  }
}

class ErrorPopup extends Component {

  render() {
    function refreshPage(){
      window.location.reload(); 
    }
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h6>Ihr gewählter Sitzpltz ist leider bereits vergeben</h6>
          <button onClick={refreshPage} className="btn-primary">Bitte wählen sie einen anderen</button>
        </div>
      </div>
    );
  }
}


