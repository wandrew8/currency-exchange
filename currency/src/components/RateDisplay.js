import React, { Component } from 'react'
import { countryData } from '../data';
 
export default class RateDisplay extends Component {

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        const { currentCountry, amount, updateAmount, calculated } = this.props
        const filteredCountry = countryData.filter(item => item.code === currentCountry);
        const { code, country, currency, type, imageCode } = filteredCountry[0];
        console.log(filteredCountry)
        return (
            <div className="rateContainer">
                <h2>You are converting from USD to {code}</h2>
                <div className="rateDisplay">
                    <div className="unitedStates">
                        <h2>United States</h2>
                        <p>USD</p>
                        <img src="https://www.countryflags.io/us/flat/64.png" alt="United States Flag" />
                        <input type="number" value={amount} onChange={updateAmount} />
                    </div>
                    <div>
                        <h2>{country}</h2>
                        <p>{code}</p>
                        <img src={`https://www.countryflags.io/${imageCode}/flat/64.png`} alt={country + " flag"} />
                        <h3 className="amount" >{this.numberWithCommas(calculated)}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
