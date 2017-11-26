const monetization = require('.');

monetization.mods.users.thisMonth('avaer')
  .then(month => {
    console.log(month);
  });

monetization.servers()
  .then(servers => {
    console.log(servers);
  });
