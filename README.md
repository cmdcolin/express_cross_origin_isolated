# express static file auth

A basic example of an express.js server that actually enables cross-origin isolation

The main motivation of this repo is we need to set special headers in order to
have `self.crossOriginIsolated=true` and use
`performance.measureUserAgentSpecificMemory()`

Specific headers set

```
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

You have to set these even when testing in localhost

See https://web.dev/coop-coep/

## Usage

```
git clone repo
yarn
node index.js <dir> <portnum>
```

Starts on port 4000 and public directory if dir/portnum not specified
