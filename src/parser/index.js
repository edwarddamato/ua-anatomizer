const parser = require('ua-parser-js');

/* TODO: The code here is a mess and needs to be
heavily refactored. */

const stats = {
  browsers: { },
  devices: { },
  os: { },
  total: 0
};

const setKeyInStat = (area, key) => {
  if (typeof stats[area][key] !== typeof undefined) {
    stats[area][key].count++;
  } else {
    stats[area][key] = {
      count: 1
    };
  }
};

const parse = uas => {
  uas.forEach(agentString => {
    stats.total++;
    const agent = parser(agentString);

    const agentBrowser = `${agent.browser.name} ${agent.browser.major}`;
    setKeyInStat('browsers', agentBrowser);

    const agentDevice = typeof agent.device.vendor === typeof undefined ? 'Unknown' : `${agent.device.vendor} ${agent.device.model}`;
    setKeyInStat('devices', agentDevice);

    const agentOS = `${agent.os.name} ${agent.os.version.split('.')[0]}`;
    setKeyInStat('os', agentOS);
  });

  Object.keys(stats).forEach(stat => {
    Object.keys(stats[stat]).forEach(itemKey => {
      const item = stats[stat][itemKey];
      item.percentage = `${parseInt((item.count * 100) / stats.total)}%`;
    });
  });

  return stats;
};

export { parse };
