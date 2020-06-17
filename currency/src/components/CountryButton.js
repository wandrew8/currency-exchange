import React, { Component } from 'react';
import { countryData } from '../data';

export default class CountryButton extends Component {
    render() {
        return (
            <div className="buttonContainer">
                {countryData.map(countries => {
                    const { country, code, currency, type } = countries
                    const { addCountry, currentCountry } = this.props;
                    return (
                        <div 
                            key={code}
                            onClick={() => addCountry(code)}
                            className={currentCountry === code ? "selected country" : "country"}>
                            <p className="countryName">{country}</p>
                            <small>{code}</small>
                            <p>{type} {currency}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
