import React, {Component} from 'react';

// const SearchBar = (props) => {
// 	return (
// 		<h1>{props.passState}</h1>
// 	)
// }

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {term: 'input term'};
	}
	render() {
		return (
			<div>
				<h3>searchbar state.term: {this.state.term}</h3>
				<input onChange={ event => this.changeState(event.target.value) } /><hr />				
				<input onChange={ event => this.props.onInputChange(event.target.value)} />
			</div>
		)
	}
	changeState(term){
		this.setState({term});
	}

}

export default SearchBar;