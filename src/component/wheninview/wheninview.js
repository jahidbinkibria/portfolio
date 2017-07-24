import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Waypoint from "react-waypoint";

class Wheninview extends Component {
    constructor(props){
        super(props);
        this.state = {
           isInView: false,
        }
    
        this.onEnter = this.onEnter.bind(this);
    }

    onEnter({previousPosition}){
        if(previousPosition === Waypoint.below){
            this.setState({
                isInView: true,
            })
        }
    }

    render() {
        return (
            <div>
                <Waypoint onEnter={this.onEnter}></Waypoint>
                {this.props.children({isInView: this.state.isInView})}
            </div>
        );
    }
}

Wheninview.propTypes = {

};

export default Wheninview;
