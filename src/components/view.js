import React, { Component } from 'react';
import { ChooseCity } from './chooseCity';
import { WeatherCard } from './weatherCard';

export class View extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city: undefined,
			name: undefined,
			color: undefined,
      bool: false
		}
	}

	onSubmit = (city, color, name) => {
        this.setState({
          city,
          name,
          color,
          bool: true
        });
        console.log(city)
    }

    render() {
    	return(
        !this.state.bool ? (
          <div>
          <ChooseCity onSubmit={this.onSubmit}/>
        </div>
          ) : (
    		<div>
	    		<ChooseCity onSubmit={this.onSubmit}/>
	    		<WeatherCard color={this.state.color} city={this.state.city} name={this.state.name}/>
    		</div>)
    	)
    }
}