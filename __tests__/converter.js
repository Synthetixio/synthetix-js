import { HavvenJs } from '../dist/main.node';
console.log('here we go');
console.log(HavvenJs);
const havjs = new HavvenJs();

test(
  'Should return getHavvensReceivedForEther for 1 ETH',
  async () => {
    const havvensReceivedForEther = await havjs.Converter.getHavvensReceivedForEther(
      havjs.util.parseEther('1')
    );
    return expect(havjs.utils.formatEther(havvensReceivedForEther)).toBeTruthy();
  },
  15000
);
