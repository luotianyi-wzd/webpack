import React from 'react';
import ReactDOM from 'react-dom';

import {
	Component
} from 'react';
import {
	render
} from 'react-dom';

import {
	AppContainer
} from 'react-hot-loader';


import 'babel-polyfill';

import App from './App';
import './style.less';
/*const renderDom = Component => {
	render(
		<AppContainer>
			<Component/>
		</AppContainer>,
		document.getElementById('app')
	)
}
renderDom(App);
if (module.hot) {
	module.hot.accept('./App', () => {
		const App = require('./App').default;
		renderDom(App);
	})
}*/


ReactDOM.render(
	<AppContainer>
		<App/>
	</AppContainer>,
	document.getElementById('app')
)

if (module.hot) {
	module.hot.accept('./App', () => {
		const App = require('./App').default;
		ReactDOM.render(
			<AppContainer>
				<App/>
			</AppContainer>,
			document.getElementById('app')
		)
	})
}