import React, { Component } from 'react';

export default class ColorButton extends Component {
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
        var buttonStyle = {
            backgroundColor: this.state.bgColor,
            border: "none",
            color:"white",
            textAlign: "center",
            textDecoration: "none",
            fontSize:16,
            padding: "10px 32px",
            cursor: "pointer",
            marginLeft: 10
        }
        return(
            <button style = {buttonStyle} onMouseEnter = {this.handleHoverIn} onMouseOut = {this.handleHoverOut} onClick = {this.props.onClick}>Add Color</button>
        )
    }
}