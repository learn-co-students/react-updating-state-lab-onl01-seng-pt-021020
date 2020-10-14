// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor() {
        super();
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

    changeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }
        })
    }

    changeRes = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Youtube Debugger</h1>
                <button className="bitrate" onClick={this.changeBitrate}>{this.state.settings.bitrate}</button>
                <button className="resolution" onClick={this.changeRes}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}