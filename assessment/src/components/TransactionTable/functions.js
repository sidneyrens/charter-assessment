const FIRST_TIER_MINIMUM = 50;
const FIRST_TIER_POINTS_ACCUMULATOR = 1;
const SECOND_TIER_MINIMUM = 100;
const SECOND_TIER_POINTS_ACCUMULATOR = 2;
const POINTS_BASELINE = 0;

const pointsAccumulator = (transactionSpend, minimum, accumulator) => (transactionSpend - minimum) * accumulator;
 
const calculateFirstTier = (dollarsSpent) => (dollarsSpent >= FIRST_TIER_MINIMUM) ? pointsAccumulator(dollarsSpent, FIRST_TIER_MINIMUM, FIRST_TIER_POINTS_ACCUMULATOR) : POINTS_BASELINE;

const calculateSecondTier = (dollarsSpent) => { return pointsAccumulator(dollarsSpent, SECOND_TIER_MINIMUM, SECOND_TIER_POINTS_ACCUMULATOR) + calculateFirstTier(SECOND_TIER_MINIMUM); }

export const calculateRewards = (dollarsSpent) => {
  return dollarsSpent && parseInt(dollarsSpent) >= 100 ? calculateSecondTier(dollarsSpent) : calculateFirstTier(dollarsSpent);
};