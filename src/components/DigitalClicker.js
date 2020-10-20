// import React, { Component } from 'React'

import React from 'react';

class DigitalClicker extends React.Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        // let newTimesClicked = this.state.timesClicked + 1

        // this.setState({
        //     timesClicked: newTimesClicked
        // })

    //****OR****** */
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }
    
    render() {
        return (
          <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        );
    }

}

export default DigitalClicker