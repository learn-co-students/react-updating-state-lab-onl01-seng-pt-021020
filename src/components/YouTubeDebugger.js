import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

    constructor(){
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

    bitRateClick = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resolutionClick = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                video:{
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        return(
            <div>
                <button className="bitrate" onClick={this.bitRateClick}>Change Bitrate to 12</button>
                <button className="resolution" onClick={this.resolutionClick}>Change Res to 720p</button>
            </div>
        )
    }

}