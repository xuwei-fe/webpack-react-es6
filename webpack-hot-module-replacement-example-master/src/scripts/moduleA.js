require('styles/moduleA.styl');

module.exports = {
  init: function () {
    document.querySelector('.module-a')
      .innerHTML = 'Hi from module A, testing..';
  }
}
