import React, { Component } from 'react';

export default class RemoveButton extends Component {
    constructor(props){
        super(props)
        this.handleHoverIn = this.handleHoverIn.bind(this)
        this.handleHoverOut = this.handleHoverOut.bind(this)
        this.state = {
            bgColor : "#4CAF50"
        }
    }
    handleHoverIn(){
        this.setState({
            bgColor  : "#4CDA50"

        })
    }
    handleHoverOut(){
        this.setState({
            bgColor: "#4CAF50"
        })
    }
    render(){
        return(
            <button className="Remove" onClick={this.props.handleRemove.bind("e",this.props.id,this.props.color)}>Remove</button>
        )
    }
}