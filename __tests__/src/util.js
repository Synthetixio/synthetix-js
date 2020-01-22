import { utils } from 'ethers';
import Util from '../../src/util';

describe('util', () => {
  const toUtf8Bytes4 = Util.prototype.toUtf8Bytes4.bind(Util.prototype);

  describe('toUtf8Bytes4', () => {
    test('Converts a string <4 long to a right padded one', () => {
      expect(toUtf8Bytes4('S').toString()).toEqual('83,0,0,0');
      expect(toUtf8Bytes4('SN').toString()).toEqual('83,78,0,0');
      expect(toUtf8Bytes4('SNX').toString()).toEqual('83,78,88,0');
    });

    test('Converts a string 4 long to a right padded one', () => {
      expect(toUtf8Bytes4('sETH')).toEqual(utils.toUtf8Bytes('sETH'));
      expect(toUtf8Bytes4('iBTC')).toEqual(utils.toUtf8Bytes('iBTC'));
    });

    test('Throws for a longer string', () => {
      expect(() => toUtf8Bytes4('sETHs')).toThrow(/cannot convert string/i);
      expect(() => toUtf8Bytes4('     ')).toThrow(/cannot convert string/i);
    });
  });
});
