import parser from 'ua-parser-js';
import R from 'ramda';

const initialStats = {
  browsers: { },
  devices: { },
  os: { }
};

const incrementer = R.ifElse(R.isNil, R.always(1), R.add(1));

const reducer = (stats, userAgent) => {
  const browserLens = R.lensPath(['browsers', `${userAgent.browser.name} ${userAgent.browser.major}`]);
  const osLens = R.lensPath(['os', `${userAgent.os.name} ${userAgent.os.version.split('.')[0]}`]);
  const deviceLens = R.lensPath(['devices', `${userAgent.device.vendor} ${userAgent.device.model}`]);

  const overBrowsers = R.over(browserLens, incrementer);
  const overOs = R.over(osLens, incrementer);
  const overDevices = R.over(deviceLens, incrementer);

  return R.compose(overBrowsers, overOs, overDevices)(stats);
};

const getUserAgentStrings = R.split('\n');
const getUserAgentObjects = R.map(parser);
const reduceUserAgentObjects = R.reduce(reducer, initialStats);

const parse = R.compose(reduceUserAgentObjects, getUserAgentObjects, getUserAgentStrings);

export { parse };
