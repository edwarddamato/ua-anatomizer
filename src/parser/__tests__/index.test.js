import input from '../../../test/utils/mockInput';
import { parse } from '../';

describe('parser', () => {
  it('should generate some statistics', () => {
    const result = parse(input);
    expect(result).toEqual({
      'browsers': {
        'Chrome 28': 1, 'Chrome 49': 1, 'Chrome 50': 1, 'Chrome 59': 12, 'Chrome WebView 59': 1, 'Firefox 54': 2, 'IE 11': 1, 'IE 6': 1, 'IE 7': 1, 'Mobile Safari 10': 3, 'Safari 10': 5, 'WebKit 603': 2
      },
      'devices': {
        'Apple iPad': 1, 'Apple iPhone': 4, 'Samsung SM-G928V': 1, 'undefined undefined': 25
      },
      'os': {
        'Android 7': 1, 'Mac OS 10': 13, 'Windows 10': 5, 'Windows 7': 6, 'Windows XP': 1, 'iOS 10': 5
      }
    });
  });
});
