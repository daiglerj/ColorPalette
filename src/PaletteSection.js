import React, {Component} from 'react'
import ColorButton from './ColorButton'


export default class PaletteSection extends Component {
    constructor(){
        super()
    }
    
    render(){
        return(
            <div>
            <input type="text" value={this.props.value} onChange = {this.props.handleChange} style = {this.props.inputStyle} placeholder="Enter the hex code of a color..."/>
            <ColorButton onClick = {this.props.handleAddColor} />
            </div>
        )
    }
}