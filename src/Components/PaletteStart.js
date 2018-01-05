import React, {Component} from 'react'

export default class PaletteStart extends Component {
    constructor(){
        super()
    }
    
    render(){
        return(
            <div>
            <p>Create a Palette</p>
            <input style= {this.props.inputStyles} onChange ={this.props.handleNewPaletteInput}/><button onClick = {this.props.handleNewPalette} >Create Palette</button>
            <p className='bigOr'>OR</p>
            <p>Use an existing palette</p>
            <input type ='text' style={this.props.inputStyles} onChange = {this.props.handleExistingPaletteInput} /><button onClick = {this.props.handleGetPalette}>Use Palette</button>
            </div>
        )
    }
}