import React, { Component } from 'react';
import { countryData } from '../data';

export default class countryForm extends Component {
    constructor(props) {
        super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.value)

    }

    render() {
        return (
            <div>
               <form>
               <select 
                    name="countries" 
                    id="countries" 
                    value={this.props.currentCountry}
                    onChange={this.props.handleChange}
                    form="countryForm">
                    {countryData.map(countries => {
                        const { country, code, currency, type } = countries
                        return (
                            <option selected={this.props.currentCountry === code ? true : false} key={code} value={code}>{code} - {type} {currency}</option>
                        )
                    })}
                </select>
               </form> 
            </div>
        )
    }
}
