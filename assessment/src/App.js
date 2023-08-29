import './App.css';
import React, {useState} from 'react';

const FIRST_TIER_MINIMUM = 50;
const FIRST_TIER_POINTS_ACCUMULATOR = 1;
const SECOND_TIER_MINIMUM = 100;
const SECOND_TIER_POINTS_ACCUMULATOR = 2;
const POINTS_BASELINE = 0;

const pointsAccumulator = (transactionSpend, minimum, accumulator) => (transactionSpend - minimum) * accumulator;
 
const calculateFirstTier = (dollarsSpent) => (dollarsSpent >= FIRST_TIER_MINIMUM) ? pointsAccumulator(dollarsSpent, FIRST_TIER_MINIMUM, FIRST_TIER_POINTS_ACCUMULATOR) : POINTS_BASELINE;

const calculateSecondTier = (dollarsSpent) => { return pointsAccumulator(dollarsSpent, SECOND_TIER_MINIMUM, SECOND_TIER_POINTS_ACCUMULATOR) + calculateFirstTier(SECOND_TIER_MINIMUM); }

const totalRewards = (dollarsSpent) => {
  return dollarsSpent && parseInt(dollarsSpent) >= 100 ? calculateSecondTier(dollarsSpent) : calculateFirstTier(dollarsSpent);
};

const App = () => {
  const [transactionValue, setTransactionValue] = useState(0);
  const [rewardPoints, setRewardPoints] = useState(0)

  const handleChange = (e) => {
    setTransactionValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const points = totalRewards(transactionValue);
    setRewardPoints(points);
  }

  return (
    <div className="App">
        <input className="transactionInput" value={transactionValue || ''} type="text" onChange={handleChange}/>
        <button className="transactionInputButton" type="submit" onClick={handleSubmit}>Calculate</button>
        <div className="pointsDisplay">{rewardPoints}</div>
    </div>
  );
}

export default App;
