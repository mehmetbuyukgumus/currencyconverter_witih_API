import style from '../styles/style.css'
import app from './app'

export default function Home() {
  return (
    
   <div>
   <h3>Currency Convertor</h3>
    <div class="container">
        <div class="input-container">
            <input type="number" id="amountInput" placeholder="Miktar Giriniz..." step="0.01"></input>
            <select id="fromCurrency">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="TRY">TRY</option>
            </select>
        </div>
        <div class="input-container">
            <input type="number" id="resultInput" placeholder="Sonuç" disabled></input>
            <select id="toCurrency">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="TRY">TRY</option>
            </select>
        </div>
        <button onclick="convertCurrency()">Çevir</button>
    </div>
   </div>
  )
}
