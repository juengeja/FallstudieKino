import React, { useContext } from "react"
//import Seat from './Seats'
import SeatsContext from "../SeatsContext"

var selectedSeats = []

const setSeat = (seat) => {
	selectedSeats = [...selectedSeats, seat]
	console.log(selectedSeats)
}

const getSeats = () => {
	return (selectedSeats)
}

const SeatAvailability = () => {
	return (
		<p>
			<div className="abstand">hallo</div>
			<div className="row">Frei : <Seat seatColor="seat-grey" /></div>
			<div className="row">Reserviert : <Seat seatColor="seat-black" /></div>
		</p>
	)
}

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
	const { seats } = useContext(SeatsContext)

	const seatNumber = props.seatno
	const seatStatus = props.seatColor ? props.seatColor : "seat-grey"

	const seatClickHandler = (event, seatNumber) => {
		event.stopPropagation()
		const seatColor = document.querySelector(`.seat-${seatNumber}`).classList
		if (getSeats().includes(seatNumber)) {

			seatColor.remove("seat-black")
			seatColor.add("seat-grey")
			//context.changeState({...seats, seatNumbers: newMovieSeats, totalSeats: seats.totalSeats-1 })
		} else {
			seatColor.remove("seat-grey")
			seatColor.add("seat-black")
			console.log(seatNumber)
			setSeat(seatNumber)
			//context.setState({...seats, seatNumbers: [...seats.seatNumbers, seatNumber], totalSeats: seats.totalSeats+1 })
		}
	}

	return (
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
				<div className="row">Frei : <Seat seatColor="seat-grey" /></div>
				<div className="row">Reserviert : <Seat seatColor="seat-black" /></div>
			</p>
		</>
	)

}

export default SeatMatrix

