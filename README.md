# Nekoslife
A Node.js library to facilitate the use of the [nekos.life](https://nekos.life) API.

## Install
```sh
$ npm install nekoslife.js
```

## Usage
```js
const nekoslife = require("nekoslife.js")

// All API functions return a Promise()
nekoslife.avatar()
  .then((res) => console.log(res))
// Res is a URL for image endpoints
```
See all available endpoints in the [source code](https://github.com/bananaboy21/nekoslife.js/blob/master/src/index.ts)
