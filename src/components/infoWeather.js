import React from 'react';
import { countriesConsumer } from '../context/countriesContext';

function InfoWeather(){

    const handleChange = e => {
        //change the state
        console.log(e);
    }

    return (
        <form>
            <div className="input-field col s12"> 
                <input type="text" name="city" id="txtCity" onChange={ handleChange }></input>
                <label htmlFor="city"></label>
            </div>
            <div className="input-field col s12"> 
                    {/* <countriesConsumer>
                        { (value) =>{
                            // console.log(value)
                            return value.countries.map( country => (
                                <select onChange={ handleChange } name="country">
                                    <option value="">Please select country</option>
                                    <option value="US">UNITADED STATES</option>
                                    <option value="MX">MEXICO</option>
                                </select>
                            ))
                        }}
                    </countriesConsumer> */}

            {/* <countriesConsumer>
                {(value) => {
                    return value.events.map(event => (
                        // console.log(event)
                        <select onChange={ handleChange } name="country">
                            <option value="">Please select country</option>
                            <option value="US">UNITADED STATES</option>
                            <option value="MX">MEXICO</option>
                        </select>
                    ))
                }}
            </countriesConsumer> */}

                <select onChange={ handleChange } name="country">
                    <option value="">Please select country</option>
                    <option value="US">UNITADED STATES</option>
                    <option value="MX">MEXICO</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Search weather"></input>
            </div>
        </form>
    );
}

export default InfoWeather;