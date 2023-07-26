'use client'
import style from '../styles/style.css'
import React from "react";
import axios from 'axios';

export default function Home() {
    const [amount, setamount] = React.useState(0);
    const [fromCurrency, setfromCurrency] = React.useState("USD");
    const [toCurrency, settoCurrency] = React.useState("TRY");

    function getRate(fromCurrency, toCurrency) {
        const url = "http://api.exchangeratesapi.io/v1/latest?access_key=4fdef46479e7a6d325425905428c9270"
        const endpoint = `${url}&base=${fromCurrency}&symbols=${toCurrency},`;
        axios.get(endpoint)
            .then(function (res) {
                console.log(res);
                const convertedValue = res.data.rates[toCurrency];
                setamount(convertedValue * amount);
            })
            .catch(function (err) {
                console.log(err);
                setamount(0);
            });
    }

    function convertCurrency() {
        getRate(fromCurrency, toCurrency);
    }

    function updateAmount(event) {
        setamount(event.target.value);
        convertCurrency();
    }

    function updateFromCurrency(event) {
        setfromCurrency(event.target.value);
        convertCurrency();
    }

    function updateToCurrency(event) {
        settoCurrency(event.target.value);
        convertCurrency();
    }

    return (
        <div>
            <h3>Currency Converter</h3>
            <div className="container">
                <div className="input-container">
                    <input type="text" id="amountInput" placeholder="Miktar Giriniz..." onChange={updateAmount}></input>
                    <select id="fromCurrency" onChange={updateFromCurrency}>
                        <option value="USD">USD</option>
                        <option value="TRY">TRY</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
                <div className="input-container">
                    <input type="text" id="resultInput" placeholder="Sonuç" value={amount} disabled></input>
                    <select id="toCurrency" onChange={updateToCurrency}>
                        <option value="TRY">TRY</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
             
            </div>
        </div>
    )
}
