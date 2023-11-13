import Header from "./components/UI/Header";
import YearlySaving from "./components/YearlySaving";
import CurrentSaving from "./components/CurrentSaving";
import ExpectedInterest from "./components/ExpectedInterest";

function App() {
  const calculateHandler = (event) => {
    event.preventDefault();

    // // Should be triggered when form is submitted 폼이 제출될 때 트리거
    // // You might not directly want to bind it to the submit event on the form though...

    // const yearlyData = []; // per-year results

    // let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    // const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    // const expectedReturn = +userInput["expected-return"] / 100;
    // const duration = +userInput["duration"];

    // // The below code calculates yearly results (total savings, interest etc)
    // for (let i = 0; i < duration; i++) {
    //   const yearlyInterest = currentSavings * expectedReturn;
    //   currentSavings += yearlyInterest + yearlyContribution;
    //   yearlyData.push({
    //     // feel free to change the shape of the data pushed to the array!
    //     year: i + 1,
    //     yearlyInterest: yearlyInterest,
    //     savingsEndOfYear: currentSavings,
    //     yearlyContribution: yearlyContribution,
  };

  // do something with yearlyData ...

  const resetHandler = () => {
    alert("Reset!");
  };

  return (
    <div>
      <Header />
      <form className="form">
        <div className="input-group">
          <CurrentSaving />
          <YearlySaving />
        </div>
        <div className="input-group">
          <ExpectedInterest />
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" />
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={resetHandler} className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button" onClick={calculateHandler}>
            Calculate
          </button>
        </p>
      </form>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>YEAR NUMBER</td>
            <td>TOTAL SAVINGS END OF YEAR</td>
            <td>INTEREST GAINED IN YEAR</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
