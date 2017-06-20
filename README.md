# dat-now

Share a dat over http, hosted on now.sh (or anywhere).

A tiny module using [dat](github.com/datproject/dat) to *live* host stuff on [now.sh](https://zeit.co/now) over http.

## Install

```
npm install dat-now
```

## Usage

`dat-now` needs your dat key to run. The easiest way to do this is to set it in `now.json`:

```json
{
  "env" : {
    "KEY" : "dat://28cddf6d5d21bbd9492dcdba14a68b9a35393b769b15f61e2a5258567d8bca8f"
  }
}
```

Then you can simple set `npm start` to `dat-now`!

### As script

You can also run it as a script. Set up your project with an `index.js` file:

```js
var datNow = require('dat-now')
datNow(process.env.KEY, [opts])
```

This will let you set any other options you want.

## License

[MIT](LICENSE.md)
