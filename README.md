# auto sign mission for didamoe.com

### Prerequisites

* [Node 5.7+](https://nodejs.org)

## Build

```sh
npm install
```

## Config

change username and password in `index.js`
```javascript
let userInfo = {
  username: 'xxxxx',
  password: 'xxxx',
  mode: 'basic'
};
```

## Run

```sh
npm run start
```

## crontab task

### run once every hour
edit file `crontab_task`, replace `your-path` with your real path, and do as:

```sh
crontab crontab_task
```
