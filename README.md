# Duplicate request when issuing AJAX in the browser

![](/screenshot.png?raw=true "")

This a proof of concept to display how a duplicate request is created when issuing an AJAX request in the browser to an Express.js server.

The first request is (purposely) not resolved for 121 seconds. A second request comes into the Express.js server at 120 seconds. The second request is not explicitly invoked by JavaScript and isn't recorded in the Network pane.

## Setup

Install [node.js](http://nodejs.org) and install dependencies

```bash
npm install
```

Run the server

```bash
node index.js
```

Open `http://localhost:3000` in your browser.

The HTML page that loads triggers a single ajax call by calling `$.ajax('http://localhost:3000/some-route')`

Open your DevTools Network pane and you'll see a single AJAX network request. However, after 121 seconds, you'll see in the server log, that a duplicate network request is handled by the Express server. Perhaps this request is issued by the browser?

If you issue a request via curl a la <code>curl http://localhost:3000/some-route</code> the request is not duplicated.