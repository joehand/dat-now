# dat-now

Publish live syncing and versioned websites, files, whatever to now.sh instantly and forever.

## Usage

* `dat share`
* `now joehand/dat-now -e KEY=dat://28cddf6d5d21bbd9492dcdba14a68b9a35393b769b15f61e2a5258567d8bca8f`

**Set your dat key** as an environment variable + deploy via now. You only need to deploy once for each dat key.

### What does this do?

* Share a folder on your computer using [Dat](github.com/datproject/dat).
* Deploy *ONCE* to [now.sh](https://zeit.co/now) with your **dat key**
* Live sync your files to now.sh without touching anything.



## How does it work?

Whenever you share a dat, `dat-now` connects via a peer to peer network to your computer. It downloads the latest copies of all the files whenever you are connected.

Once on now, Dat serves the files over http! You can even view old versions of the files: `https://dat-now-enqtptfoko.now.sh/?version=100`.

## License

[MIT](LICENSE.md)
