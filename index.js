'use strict';

let request = require('request');

let userInfo = {
  username: 'xxxxx',
  password: 'xxxx',
  mode: 'basic'
};

request = request.defaults({ jar: true });

request({
  method: 'POST',
  uri: 'http://wz.skyerblog.com/app/index.php?i=2&j=2&c=auth&a=login&forward=aT0yJmo9MiZjPWVudHJ5JnJpZD00NiZkbz1zaWduJm09bWVlcG9fbnNpZ24%3D&wxref=mp.weixin.qq.com',
  headers: {
    Referer: 'http://wz.skyerblog.com/app/index.php?i=2&j=2&c=auth&a=login&forward=aT0yJmo9MiZjPWVudHJ5JnJpZD00NiZkbz1zaWduJm09bWVlcG9fbnNpZ24%3D&wxref=mp.weixin.qq.com',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36'
  },
  encoding: 'utf-8',
  json: true,
  body: userInfo
}, (error, response, body) => {
  if (body === 'success') {
    request('http://wz.skyerblog.com/app/index.php?i=2&j=2&c=entry&rid=46&do=sign&m=meepo_nsign', (error, response, body) => {
      if (error) {
        process.exit(1);
      } else {
        try {
          let ret = JSON.parse(body);
          console.log(ret);
        } catch (e) {
          console.log('sign error: ', e.message);
        }
      }
    });
  }
});

