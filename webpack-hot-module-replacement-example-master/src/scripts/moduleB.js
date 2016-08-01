require('styles/moduleB.styl');

module.exports = {
  init: function () {
    document.querySelector('.module-b')
      .innerHTML = 'Hi from module B';
  }
}

