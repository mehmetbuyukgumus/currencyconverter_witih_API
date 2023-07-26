'use client'
import style from '../styles/style.css'
import React from "react";
import axios from 'axios';


export default function Home() {
    const [amount, setamount] = React.useState(0);
    const [convertedAmount, setConvertedAmount] = React.useState(0);
    const [fromCurrency, setfromCurrency] = React.useState("USD");
    const [toCurrency, settoCurrency] = React.useState("TRY");
    const currencies = ["TRY", "EUR"]
    

    function getRate(fromCurrency, toCurrency) {
        const url = "http://api.exchangeratesapi.io/v1/latest?access_key=API_KEY"
        const endpoint = `${url}&base=${fromCurrency}&symbols=${toCurrency},`;
        axios.get(endpoint)
            .then(function (res) {
                console.log(res);
                const convertedValue = res.data.rates[toCurrency];
                setConvertedAmount(convertedValue * amount);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function convertCurrency() {
        getRate(fromCurrency, toCurrency);
    }

    function updateAmount(event) {
        setamount(event.target.value);
    }

    function updateFromCurrency(event) {
        setfromCurrency(event.target.value);
    }

    function updateToCurrency(event) {
        settoCurrency(event.target.value);
    }

    return (
        <div>
            <h3>Currency Converter</h3>
            <div className="container">
                <div className="input-container">
                    <input type="text" id="amountInput" value={amount} onChange={updateAmount}></input>
                    <select id="fromCurrency" onChange={updateFromCurrency}>
                    {currencies.map((curr, index) => (
                    <option value={curr}>{curr}</option>    
                    ))}
                    </select>
                </div>
                <div className="input-container">
                    <input type="text" id="resultInput" placeholder="Sonuç" value={convertedAmount} disabled></input>
                    <select id="toCurrency" onChange={updateToCurrency}>
                    {currencies.map((curr, index) => (
                    <option value={curr}>{curr}</option> 
            ))}
                    </select>
                </div>
            <button onClick={convertCurrency}>Çevir</button>
             
            </div>
        </div>
    )
}
