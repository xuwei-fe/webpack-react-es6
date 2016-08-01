'use strict';

// ES6 测试
/*class HelloWorld {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}
}

let hw = new HelloWorld(1, 2);
console.log(hw.x);
console.log(hw.y);*/

import React from 'react';
import ReactDOM from 'react-dom';
import './hello.less';
class HelloWorld extends React.Component {
	render() {
		return (
			<h1>Hello sd!</h1>
		);
	}
}

ReactDOM.render(
	<HelloWorld />,
	document.getElementById('example')
);