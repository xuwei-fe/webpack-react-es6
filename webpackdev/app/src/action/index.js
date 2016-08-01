import '../../less/main.less';
import generateText from '../service/sub.js';

let app  = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
  document.body.appendChild('<p>promise result is ' + number + ' now is 555</p>');
});
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());