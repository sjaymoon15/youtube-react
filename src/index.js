import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {term: 'default'};
	}
	render() {
		return (
			<SearchBar passState={this.state.term}/>
		)
	}
}

ReactDOM.render( <App />, document.getElementById('app'));