import React from 'react';
import moment from 'moment';
import CountryButton from './components/CountryButton';
import CountryForm from './components/countryForm';
import RateDisplay from './components/RateDisplay';
import './App.scss';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: '',
      currentCountry: 'CAD',
      exchangeRates: {},
      amount: 100,
      calculated: 0,

    }
    this.addCountry = this.addCountry.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateAmount = this.updateAmount.bind(this);

  }

  componentDidMount() {
      this.getDate();
      this.getExchangeData();
  }

  addCountry = (country) => {
    this.setState({ currentCountry: country}, () => {
      this.calculateExchange();
    });
  }

  getDate = () => {
    this.setState({ date: moment(Date.now()).format('MMMM Do, YYYY')})
  }

  getExchangeData = () => {
    fetch("https://api.exchangeratesapi.io/latest?base=USD")
    .then(res => res.json())
    .then(data => {
      this.setState({ exchangeRates: data.rates }, () => {
        this.calculateExchange();
      })
    })
  }

  updateAmount = (e) => {
    this.setState({ amount: e.target.value}, () => {
      this.calculateExchange();
    })
  }

  handleChange = (event) => {
    this.setState({currentCountry: event.target.value});
  }

  calculateExchange = () => {
    const rate = this.state.exchangeRates[this.state.currentCountry];
    this.setState({ calculated: (rate * this.state.amount).toFixed(2) })
}

  render() {
    return (
      <div>
        <h1>Currency Exchange</h1>
        <p>{this.state.date}</p>
        {/* <CountryForm handleChange={this.handleChange}/> */}
        <CountryButton 
          addCountry={this.addCountry} 
          currentCountry={this.state.currentCountry} />
        <RateDisplay 
          updateAmount={this.updateAmount} 
          amount={this.state.amount} 
          currentCountry={this.state.currentCountry} 
          calculated={this.state.calculated}
          exchangeRates={this.state.exchangeRates} />
      </div>
    );
  }
}

