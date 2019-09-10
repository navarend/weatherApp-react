import React from 'react';
import Header from './components/Header';
import InfoWeather from './components/infoWeather';

function App() {
  return (
   <div className="App"> 
     <Header title="Weather APP"></Header> 
     <div className="contenedor-form">
        <div className="container">
          <div className="row">
             <div className="col s12 m6">
                 <InfoWeather></InfoWeather>
             </div>
          </div>         
        </div>
      </div> 
   </div>

  );
}

export default App;
