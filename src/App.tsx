import CurrencyInput from "./components/CurrencyInput"

function App() {
  return (
    <div className="main-container">
      <h2>Currency Exchange</h2>
      <p>1.03 PKR equals</p>
      <h2>1.03 PKR</h2>
      <CurrencyInput></CurrencyInput>
      <CurrencyInput></CurrencyInput>
      <div className="button-container">
        <button>Calculate</button>
      </div>
    </div>
  )
}

export default App
