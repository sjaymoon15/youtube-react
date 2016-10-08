import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {term: 'app term'};
	}
	render() {
		return (
			<div>
				<SearchBar onInputChange={term => this.onInputChange(term)} />
				<h3>app state.term:  {this.state.term}</h3>
			</div>
		)
	}
	onInputChange(term){
		console.log(term);
		this.setState({term});
	}
}

ReactDOM.render( <App />, document.getElementById('app'));