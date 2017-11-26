const fetch = require('node-fetch');

const _resJson = res => {
  if (res.status >= 200 && res.status < 300) {
    return res.json();
  } else if (res.status === 404) {
    return Promise.resolve(null);
  } else {
    return Promise.reject({
      status: res.status,
      stack: 'API returned invalid status code: ' + res.status,
    });
  }
};

module.exports = {
  mods: {
    users: {
      thisMonth: username => fetch(`https://my-site.zeovr.io/analytics/mods/users/${username}/thisMonth`)
        .then(_resJson),
    },
  },
  servers: () => fetch('https://my-site.zeovr.io/analytics/servers')
    .then(_resJson),
};
