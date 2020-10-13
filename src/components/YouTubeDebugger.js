import React, { Component } from 'react'


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

  setBitrate = () => {
    this.setState(previousState => {
      return {
        ...previousState,
        settings: {
          ...previousState.settings,
          bitrate: 12
        }
      }
    })
  }

  setResolution = () => {
    this.setState(previousState => {
      return {
        ...previousState,
        settings: {
          ...previousState.settings,
          video: {
            ...previousState.settings.video,
            resolution: '720p'
          }
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button
          className='bitrate'
          onClick={this.setBitrate}
        >
          Bitrate 12
        </button>

        <button
          className='resolution'
          onClick={this.setResolution}
        >
          Resolution 720p
        </button>
      </div>
    )
  }
}