'use client'

import style from '../styles/style.css'
import React from "react";

export default function Home() {
    const [amount, setamount] = React.useState(0);
    const [fromCurrency, setfromCurrency] = React.useState("USD");
    const [toCurrency, settoCurrency] = React.useState("TRY");

    function convertCurrency() {
        const rates = {
            TRY: 1,
            USD: 28,
            EUR: 30
        };
        const result = amount * rates[fromCurrency] / rates[toCurrency];
        return result.toFixed(2);
    }

    function updateAmout(event) {
        setamount(event.target.value);
    }

    function updatefromCurrency(event) {
        setfromCurrency(event.target.value);
    }

    function updatetoCurrency(event) {
        settoCurrency(event.target.value);
    }

    return (
        <div>
            <h3>Currency Converter</h3>
            <div className="container">
                <div className="input-container">
                    <input type="text" id="amountInput" placeholder="Miktar Giriniz..." onChange={updateAmout}></input>
                    <select id="fromCurrency" onChange={updatefromCurrency}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="TRY">TRY</option>
                    </select>
                </div>
                <div className="input-container">
                    <input type="text" id="resultInput" placeholder="Sonuç" value={convertCurrency()} disabled></input>
                    <select id="toCurrency" onChange={updatetoCurrency}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="TRY">TRY</option>
                    </select>
                </div>
             
            </div>
        </div>
    )
}
