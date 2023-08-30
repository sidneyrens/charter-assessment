import { faker } from '@faker-js/faker';
import { calculateRewards } from '../components/TransactionTable/functions';

faker.seed(234)

const createRandomTransaction = () => {
    const orderTotal = faker.commerce.price({max: 1000});
    const orderRewards = calculateRewards(orderTotal);
    const today = new Date();
    const threeMonthBoundary = today.getMonth() - 3;

    return {
      orderDate: faker.date.between({from: today.setMonth(threeMonthBoundary), to: Date.now()}),
      orderTotal,
      orderRewards
    };
  };

export const createRandomUser = () => {
    return {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        transactions: [createRandomTransaction()]
    };
};


