import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConverterForm from './converterForm';

var xmlhttp = new XMLHttpRequest();
var url = "https://v6.exchangerate-api.com/v6/010eaa57e587a34f411c424b/latest/USD";

xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        var myArr = JSON.parse(this.responseText);
        var conversionRatesResponse = myArr.conversion_rates;
        ReactDOM.render(
          <React.StrictMode>
            <ConverterForm currencies={Object.keys(conversionRatesResponse)} conversionRates={conversionRatesResponse}/>
          </React.StrictMode>,
          document.getElementById('root')
        );
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();


