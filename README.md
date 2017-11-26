## API

### Users

```
const monetization = require('.');

monetization.mods.users.thisMonth('avaer')
  .then(month => {
    console.log(month);
  });
```

### Servers

```
const monetization = require('.');

monetization.servers()
  .then(servers => {
    console.log(servers);
  });
```
