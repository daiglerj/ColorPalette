/*
    Contains an input field to add a color to the palette
*/

import React, {Component} from 'react'
import AddColorButton from './AddColorButton'


export default class AddColor extends Component {
    constructor(){
        super()
    }
    
    render(){
        return(
            <div>
            <input type="text" value={this.props.value} onChange = {this.props.handleChange} style = {this.props.inputStyle} placeholder="Enter the hex code of a color..."/>

            <AddColorButton onClick = {this.props.handleSubmit} />
            </div>
        )
    }
}