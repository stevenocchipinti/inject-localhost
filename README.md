Inject Localhost
================

This chrome extension will inject the following tags into **every** page:

```
<script type="text/javascript" src="//localhost:8080/plugin.js"></script>
<link type="text/css" rel="stylesheet" src="//localhost:8080/plugin.css"/>
```

You can then serve these files from your localhost.
This can be useful for local development of javascript/css.


Serving local files
-------------------

You can use the local webserver bundled into this repository to serve files.  
This server will add CORS headers so all you need to do is create `plugin.js` and `plugin.css` and start the server:

```
npm install
npm run server
```
