(function() {

  function injectJS(elm, url) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    elm.appendChild(script);
  }

  function injectCSS(elm, url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    elm.appendChild(link);
  }

  var element = document.getElementsByTagName("head")[0] || document.body;
  injectJS(element, "//localhost:8080/plugin.js");
  injectCSS(element, "//localhost:8080/plugin.css");

})();
