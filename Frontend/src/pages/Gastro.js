import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import Title from '../components/Title';
import axios from 'axios';
import { addToCart, addItem, removeAll } from '../components/actions/storeActions';
import ScrollButton from '../components/ScrollButton';

import KiddyPack from "../images/KiddyPack.png";
import PartnerMenu from "../images/PartnerMenu.png";
import BestsellerMenu from "../images/BestsellerMenu.png";
import BlockbusterMenu from "../images/BlockbusterMenu.png";
import { connect } from 'react-redux';

import gastroData from '../gastroData.json';

class Gastro extends Component {
  state = {
    menus: [
      {
        img: KiddyPack,
        name: 'KiddyPack'
      },
      {
        img: PartnerMenu,
        name: 'PartnerMenu'
      },
      {
        img: BestsellerMenu,
        name: 'BestsellerMenu'
      },
      {
        img: BlockbusterMenu,
        name: 'BlockbusterMenu'
      },

    ]
  };

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleRemove = (id) => {
    this.props.removeAll(id);
  }

  handleAdd = (e) => {
    this.props.items[this.props.items.length - 1].menu = e.target.value
    let newBooking = this.props.items[this.props.items.length - 1]
    axios.put('http://5.45.107.109:4000/api/menu', newBooking)
      .then(res => {
        if (res.data != null) {
          if (res.data.bookingStatus === "reserved") {
            this.handleRemove()
            let entry = res.data
            this.props.addItem(entry);
            this.props.addToCart(entry.id);
            this.props.history.push('/shoppingCart');
          } else {
            alert("Ein Fehler ist aufgetreten")
          }
        } else {
          alert("Ein Fehler ist aufgetreten")
        }
      })
  }

  showTable = (path) => {
    return (
      path.map((item) => {
        return (
          <tr>
            <td><b>{item.title}</b></td>
            <td>{item.price}</td>
          </tr>
        );
      })
    )
  }

  showTableHead() {
    return (
      <thead>
        <tr>
          <th>Produkt</th>
          <th>Preis</th>
        </tr>
      </thead>
    )
  }

  showMenuAddBbutton() {
    if (this.props.items.length && this.props.items[this.props.items.length - 1].reservations.length && this.props.items[this.props.items.length - 1].menu === null) {
      return (
        this.state.menus.map(item => {
          return (
            <div className="gastro-menus-container">
              <img src={item.img} alt={item.img} />
              <button className="btn-primary gastro-menu-link" onClick={this.handleAdd} value={item.name}>Hinzufügen</button>
            </div>
          );
        }))
    } else {
      return (
        this.state.menus.map(item => {
          return (
            <div className="gastro-menus-container">
              <img src={item.img} alt={item.img} />
            </div>
          );
        }))
    }
  }

  render() {
    return (
      <>
        <Hero hero="gastroHero">
          <Banner title="Gastronomie" />
        </Hero>
        <section className="home">
          <Title title="Mit unseren Menüs zu einem kulinarischen Kinoerlebnis!" />
          Wir haben für dich unsere beliebtesten Gastronomie-Artikel in einigen Menüs zusammengestellt. So sparst du im Vergleich zum Einzelkauf bis zu 17 %.
          <br />
          <br />
          Selbstverständlich erhältst du durch unsere freundlichen Mitarbeiterinnen und Mitarbeiter in der Gastronomie automatisch die für dich günstigste Kombination! Informiere dich hier über unsere verschiedenen Menü-Angebote.
        </section>

        <section className="gastro">
          <Title title="Getränke" />
          <table class="gastro-table">
            {this.showTableHead()}
            <tbody>
              {this.showTable(gastroData.drinks)}
            </tbody>
          </table>

          <Title title="Snacks" />
          <table class="gastro-table">
            {this.showTableHead()}
            <tbody>
              {this.showTable(gastroData.snacks)}
            </tbody>
          </table>

          <Title title="Mahlzeit" />
          <table class="gastro-table">
            {this.showTableHead()}
            <tbody>
              {this.showTable(gastroData.food)}
            </tbody>
          </table>

          <Title title="Menüs" subtitle="Bestelle jetzt zu deinem Ticket ein Menü online dazu und spare über 10%" />
          <div className="gastro-menus" id="menues">
            {this.showMenuAddBbutton()}
          </div>
          <br />
        </section>
        <ScrollButton />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  }
}
const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (id) => { dispatch(addToCart(id)) },
    addItem: (id) => { dispatch(addItem(id)) },
    removeAll: (id) => { dispatch(removeAll(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gastro)