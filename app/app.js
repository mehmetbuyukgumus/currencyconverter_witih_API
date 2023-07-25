import React from 'react'

export default function app() {
  return (
    <div>
        <script>
            {
                function convertCurrency() {
                    const amount = parseFloat(document.getElementById("amountInput").value);
                    const fromCurrency = document.getElementById("fromCurrency").value;
                    const toCurrency = document.getElementById("toCurrency").value;
                    const rates = {
                        TRY: 1,
                        USD: 28,
                        EUR: 30
                    };
                
                    const result = amount * rates[fromCurrency] / rates[toCurrency];
                    document.getElementById("resultInput").value = result.toFixed(2);
                }
            }
        </script>
    </div>
  )
}
