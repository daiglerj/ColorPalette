import React, {Component} from 'react'
import {Card} from './ColorCard'

export default class Palette extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           colors: this.props.colors 
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({colors: nextProps.colors});
    }
    render(){
        var squareStyle = {
            display:"inline-block",
            marginRight: 10
        }
        var listStyle ={
            listStyleType: "none",
        }
        return(
            <div id="ColorList">
                <ul style={listStyle}>
                {this.state.colors.map((color) => {
                 return <li key = {color.id} style={squareStyle}><Card {...this.props} id = {color.id} color={color.color} /></li>
                })}
                </ul>
            </div>
        )
    }
}