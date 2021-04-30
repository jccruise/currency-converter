import React from 'react';

let currencyConversions;
const ConverterForm = props => {
    currencyConversions = props.conversionRates;
    return(
        <div>
            <div className='containerSelectors'>
                <label>Base Currency:</label>
                <select id='baseSelect'>
                    {props.currencies.map((currency, index) => {
                        return <option key={index} value={currency}>{currency}</option>
                    })}
                </select>
                <input type='text' id='baseCurrencyAmt'></input>
                <label>Converted Currency:</label>
                <select id='conversionSelect' onChange={() => {document.getElementById('convertedCurrencyAmt').value = ''}}>
                    {props.currencies.map((currency, index) => {
                        return <option key={index} value={currency}>{currency}</option>
                    })}
                </select>
                <input type='text' id='convertedCurrencyAmt' readOnly></input>
            </div>
            <div className='buttonDiv'>
                <button onClick={currencyConvert}>Convert Currency</button>
            </div>
        </div>
    )
}

const currencyConvert = () => {
    console.log(currencyConversions);
    let baseCurrency = document.getElementById('baseSelect').value;
    let baseCurrencyValue = currencyConversions[baseCurrency];

    let conversionCurrency = document.getElementById('conversionSelect').value;
    let conversionCurrencyRate = currencyConversions[conversionCurrency];

    let baseCurrencyAmt = document.getElementById('baseCurrencyAmt').value;
    let conversionCurrencyValue = (conversionCurrencyRate/baseCurrencyValue) * baseCurrencyAmt;

    document.getElementById('convertedCurrencyAmt').value = conversionCurrencyValue.toFixed(2);
}

export default ConverterForm