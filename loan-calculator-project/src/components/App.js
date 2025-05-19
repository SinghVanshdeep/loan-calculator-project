import React, { useState, useEffect } from 'react';

function App(){
  const [result, setResult] = useState('');
  const [lAmount, setLAmount] = useState(0);
  const [iRate, setIRate] = useState(0);
  const [months, setMonths] = useState(0);
  

  useEffect(() => {
    const n = iRate / (12 * 100);
    const ans = lAmount * ((n*(1+n)**months)/(((1+n)**months)-1));

    setResult(parseFloat(ans.toFixed(2)));
    console.log(ans);

  }, [lAmount, iRate, months]);

  return(
    <div id="main">
      <div id="container">
      <p className="h2">Loan Calculator</p>
      <div className="input-container">
        <label>Loan Amount £</label>
        <input className="form-control" type="number" placeholder="Enter amount" onChange={(e) => setLAmount(e.target.value)}/>
      </div>
      <div className="input-container">
        <label>Interest Rate %</label>
        <input className="form-control" type="number" placeholder="Enter Annual Interest" onChange={(e) => setIRate(e.target.value)}/>
      </div>
      <div className="input-container">
        <label>Months to Pay</label>
        <input className="form-control" type="number" placeholder="Enter Duration" onChange={(e) => setMonths(e.target.value)}/>
      </div>
      <div className="w-100">
        <p className="h5">Monthly Payment: {!isFinite(result) ? "" : result}</p>
      </div>
      </div>
    </div>
  );
};

export default App;