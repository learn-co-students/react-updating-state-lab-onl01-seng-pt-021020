import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {
	constructor() {
    super()
		this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }
  
  bitrateClick = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video:{
          resolution: '720p'
        }
      }
    })
  }

	render() {
		return (
			<div>
				<button onClick={this.bitrateClick} className="bitrate">{this.state.settings.bitrate}</button>
				<button onClick={this.resolutionClick} className="resolution">{this.state.settings.video.resolution}</button>
			</div>
		);
	}
}
