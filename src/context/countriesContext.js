import React, { Component } from 'react';

const countriesContext = React.createContext();
export const countriesConsumer = countriesContext.Consumer;

class CountriesProvider extends Component {
    state = {
        dataCountries : []
    }

    getCountries = async () => {
        const url = 'https://restcountries.eu/rest/v2/region/Americas';
        let countries = await fetch(url);
        console.log(countries);
        this.setState({
            dataCountries : countries
        })
    }

    render(){
        return (
            <countriesContext.Provider
                value={{ 
                    countries: this.state.dataCountries,
                    getCountries: this.getCountries
                }}>
                { this.props.children }
            </countriesContext.Provider>
        );
    }
}

export default CountriesProvider;