require('styles/hot-module.styl');

module.exports = {
  init: function() {
    document.querySelector('.hot-module')
      .innerHTML = 'Hi from hot module.. hi!';
  }
}
