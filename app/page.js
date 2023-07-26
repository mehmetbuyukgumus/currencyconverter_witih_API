'use client'

import style from '../styles/style.css'
import React from "react";

export default function Home() {
    const [amount, setamount] = React.useState(0);
    const [fromCurrency, setfromCurrency] = React.useState("USD");
    const [toCurrency, settoCurrency] = React.useState("TRY");
    function convertCurrency(amount, fromCurrency, toCurrency) {
        // const amount = parseFloat(document.getElementById("amountInput").value);
        // const fromCurrency = document.getElementById("fromCurrency").value;
        // const toCurrency = document.getElementById("toCurrency").value;
        const rates = {
            TRY: 1,
            USD: 28,
            EUR: 30
        };
        const result = amount * rates[fromCurrency] / rates[toCurrency];
        return result.toFixed(2);
        // document.getElementById("resultInput").value = result.toFixed(2);
    }
    function updateAmout(value) {
        setamount(value);
    }
    function updatefromCurrency(value) {
        setfromCurrency(value);
    }
    function updatetoCurrency(value) {
        settoCurrency(value);
    }
  return (
   <div>
   <h3>Currency Converter</h3>
    <div class="container">
        <div class="input-container">
            <input type="text" id="amountInput" placeholder="Miktar Giriniz..." onChange={updateAmout}></input>
            <select id="fromCurrency" onChange={updatefromCurrency}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="TRY">TRY</option>
            </select>
        </div>
        <div class="input-container">
            <input type="text" id="resultInput" placeholder="Sonuç" disabled></input>
            <select id="toCurrency" onChange={updatetoCurrency}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="TRY">TRY</option>
            </select>
        </div>
        <button onclick = {convertCurrency}>Çevir</button>
        </div>
    </div>
  )
}
