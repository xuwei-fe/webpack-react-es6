require('scripts/moduleA').init();
require('scripts/moduleB').init();
require('scripts/hot-module').init();

if (module.hot) {
  module.hot.accept('./hot-module', function () {
    require('scripts/hot-module').init();
  });
}




