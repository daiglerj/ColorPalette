import React, {Component} from 'react'
import RemoveButton from './RemoveColorButton'

class Color extends React.Component {
    render(){
        var squareStyle = {
            height: 150,
            backgroundColor: this.props.color
        }
        return(
            <div style={squareStyle}>
            </div>
        )
    }
}
            
class Label extends React.Component {
    constructor(){
        super();
    }

    render(){
        var labelStyle = {
              fontFamily: "sans-serif",
              fontWeight: "bold",
              padding: 13,
              margin: 0
        }
        return(
            <div>
                <p style = {labelStyle}>{this.props.color}</p>
          
                <RemoveButton {...this.props} />
            </div>
            
        )
    }
}

export class Card extends React.Component {
    render(){
        var cardStyle = {
              height: 200,
              width: 150,
              padding: 0,
              marginBottom:20,
              backgroundColor: "#FFF",
              WebkitFilter: "drop-shadow(0px 0px 5px #666)",
              filter: "drop-shadow(0px 0px 5px #666)"
        }
        return(
            <div style ={cardStyle}>
                <Color {...this.props}/>
                <Label {...this.props}/>
            </div>
        )
    }
}