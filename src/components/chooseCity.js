import React, { Component } from 'react';
import LA from '../images/la.jpg';
import Portland from '../images/portland.jpg';
import SF from '../images/San Francisco, CA.jpg';
import Seattle from '../images/seattle.jpg';


const cities = [
	{
	name: 'San Francisco',
	value: 'sanFran',
	img: SF,
	color: 'orange'
	},
	{
	name: 'Los Angeles',
	value: 'losAngeles',
	img: LA,
	color: 'blue'
	},
	{
	name: 'Seattle',
	value: 'seattle',
	img: Seattle,
	color: 'green'
	},
	{
	name: 'Portland',
	value: 'portland',
	img: Portland,
	color: 'gold'
	}
]

const CityCard = ({ name, img, color, onClick, value}) => {
	return(
		<div id='cardContainer'>
			<div id='cityCard' onClick={(e) => onClick(value, color, name)} style={{'border-color': color}}>
				<div id='cityTitle' style={{'background': color}}>	
					<h2>{name}</h2>
				</div>
				<img src={img}/>	
			</div>
		</div>
	)
}

export class ChooseCity extends Component {
	constructor(props){
		super(props);
		this.state = {
			city: undefined,
			name: undefined,
			color: undefined
		}
	}

	onClick = (value, color, name) => {
		this.setState({
			city: value,
			name: name,
			color: color
		},() => {this.props.onSubmit(this.state.city, this.state.color, this.state.name) })
		
	}
	render() {
		return(
			<div>
				<h2 id='citySelectText'>Select a city:</h2>
				<div id='MainCityContainer'>
					{cities.map((city) => 
						<CityCard 
						name={city.name} 
						value={city.value} 
						onClick={this.onClick}
						color={city.color}
						img={city.img}
						value={city.value}
						/>
					)}
				</div>
			</div>
		)
	}
}