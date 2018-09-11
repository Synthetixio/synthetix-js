import { HavvenJs } from '../dist/main.node';
const havjs = new HavvenJs();

test(
  'Should return balanceOf nomin fee address',
  async () => {
    const balanceOf = await havjs.StablePayments.balanceOf(
      '0xfeefeefeefeefeefeefeefeefeefeefeefeefeef'
    );
    return expect(havjs.utils.formatEther(balanceOf)).toBeTruthy();
  },
  15000
);
