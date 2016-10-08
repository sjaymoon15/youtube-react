import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YouTubeSearch from 'youtube-api-search';
import MainVideo from './components/main_video';
const API_KEY = 'AIzaSyA7NXXia2FtGFyh1Ik47ZWWarSn7Wn72hw';


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			term: 'app term',
			videos: []
		};

		YouTubeSearch({key : API_KEY, term: 'react coding' }, (videos) => {
			// this.setState({ videos })
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}
	render() {
		return (
			<div>
				<SearchBar onInputChange={term => this.onInputChange(term)} />
				<h3>app state.term:  {this.state.term}</h3>
				<MainVideo videos={this.state.videos} />
			</div>
		)
	}
	onInputChange(term){
		console.log(term);
		this.setState({term});
	}
}

ReactDOM.render( <App />, document.getElementById('app'));