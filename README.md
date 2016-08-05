# Duplicate request when issuing AJAX in the browser

![](/screenshot.png?raw=true "")

This a proof of concept to display how a duplicate request is created when issuing an AJAX request in the browser to a Node.js HTTP server.

The Node.js HTTP server has a timeout of 3 seconds. The first request fires immediately, and a second request is triggered after 3 seconds. The second request is not explicitly invoked by JavaScript and isn't recorded in the Network pane.

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

The HTML page that loads triggers a single ajax call by calling `$.ajax('http://localhost:3000/ajax-route')`

Open your DevTools Network pane and you'll see a single AJAX network request that took 6 seconds and failed.

If you issue a request via curl a la <code>curl http://localhost:3000/ajax-route</code> the request is not duplicated.