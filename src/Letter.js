import React, {Component} from 'react'

export default class Letter extends Component {
    render(){
        var letterStyle = {
            padding:10,
            margin:10,
            backgroundColor: this.props.bgcolor,
            display: "inline-block",
            fontFamily: "monospace",
            fontSize:32,
            textAlign:"center"

        }
        return(
            <div style = {letterStyle}>
                <p>{this.props.children}</p>
            </div>        
        )
    }

    
}