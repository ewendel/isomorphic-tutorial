var React = require('react');

// Expose `window.React` for dev tools.
window.React = React;

module.exports = RendererClient;

function RendererClient() {}

RendererClient.viewsDir = 'app/views';

RendererClient.prototype.render = function(component) {
  // <Write code to render on the client side here>
};

RendererClient.prototype.handleErr = function(err) {
  console.error(err.message + err.stack);
  alert(err);
};
