import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CardPeople from "../components/CardPeople.jsx";
import CardPlanet from "../components/CardPlanet.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	async function character() {

		const response = await fetch("https://www.swapi.tech/api/people/")

		const data = await response.json()
		const basic_character = data.results;
		dispatch({
			type: "get_personajes",
			payload: { personaje: basic_character }
		})


	}
	async function planet() {
		const response = await fetch("https://www.swapi.tech/api/planets/")
		const data = await response.json()
		const basic_planets = data.results;
		dispatch({
			type: 'get_planetas',
			payload: {planetas: basic_planets}
		})
		
	}
	async function vehicle() {
		const response = await fetch("https://www.swapi.tech/api/vehicles/")
		const data = await response.json()
		const basic_vehicle = data.results;
		dispatch({
			type: 'get_vehicles',
			payload: {vehicles: basic_vehicle}
		})
		
	}



	useEffect(() => {
		character()
		planet()
	}, [])

	return (
		<div className="mx-5 mt-5">
			<h1 className="text-danger">Characters</h1>
			<div className='d-flex flex-nowrap overflow-auto'>
				{store.character.map((value, index) => {
					return (
						<CardPeople key={index} people={value} />
					)
				})}
			</div>
			<h1 className="text-danger mt-3">Planets</h1>
			<div className='d-flex flex-nowrap overflow-auto'>
				{store.planet.map((value, index) => {
					return (
						<CardPlanet key={index} planet={value} />
					)
				})}
			</div>
			<div className='d-flex flex-nowrap overflow-auto'>
				{store.vehicle.map((value, index) => {
					return (
						<CardVehicle key={index} vehicle={value} />
					)
				})}
			</div>
		</div>
	);
}; 