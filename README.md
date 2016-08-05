# Duplicate AJAX request in the browser

This a proof of concept to display how a browser may send a duplicate AJAX request in tandem with a Node.js server. The second AJAX request is not explicitly invoked by JavaScript, and isn't recorded in the Network pane.

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

You can pop open your DevTools Network pane and you'll see a single AJAX network request. However, after 121 seconds, you'll see in the server log, that a duplicate network request is handled by the Express server. Perhaps this request is issued by the browser?

If you issue a request via curl a la <code>curl http://localhost:3000/some-route</code> the request is not duplicated.