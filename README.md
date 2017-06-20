# dat-now

Share a dat over http, hosted on now.sh (or anywhere).

A tiny module using [dat](github.com/datproject/dat) to *live* host stuff on [now.sh](https://zeit.co/now) over http.

## Install

```
npm install dat-now
```

## Usage

Set up your project with an index.js file and a `now.json` file:

`index.js`:

```js
var datNow = require('dat-now')
datNow(process.env.KEY, [opts])
```

`now.json`:

```json
{
  "key": "beakerbrowser.com"
}
```

## License

[MIT](LICENSE.md)
