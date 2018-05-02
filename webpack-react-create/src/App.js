import React, {
	Component
} from 'react';
import img from './webpack02.png';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1
		}
	}
	add() {
		this.setState({
			count: this.state.count + 1
		})
	}
	render() {
		return (
			<div>
				<p>{this.state.count}</p>
				<button onClick={()=>this.add()}>Add{this.state.count}</button>
				<img src={require('./webpack02.png')} alt="fail"/>
			</div>
		)
	}
}