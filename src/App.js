import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Card} from './ColorCard'
import firebase from 'firebase'
import reactfire from 'reactfire'
import ColorButton from './ColorButton'

  // Initialize Firebase

class App extends Component {
    constructor(){
        super();
        this.state = {
            squares: [
            ],
            inputValue: "",
            count: 1
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleHover = this.handleHover.bind(this)
    }
    componentWillMount(){
        var count = -1
        var colors= []
       
        
     
    }
    
    handleChange(event){
        this.setState({
            inputValue: event.target.value
        })
    }
    handleSubmit(event){
        this.setState({
            count: this.state.count+1
        })
        var count = this.state.count;
        
        console.log(this.state.squares)
        this.setState({
            squares: [...this.state.squares,{id:this.state.count,color:this.state.inputValue}],
        },()=>{
            console.log(this.state.squares)
        })

        

    }
    handleRemove(index,event){
        var length = this.state.squares.length
        var updatedSquares = []
        console.log(index)
        //remove from interface
        for(var i=0;i<length;i++){
            //console.log(i)
            //console.log(this.state.squares[0])
            if(this.state.squares[i].id != index){
                var updatedSquares = [...updatedSquares,this.state.squares[i]] 
            }
        }
        
        this.setState({
            squares: updatedSquares
        })
        
        
    }
    handleHover(event){
        console.log("Hello")
    }


  render() {
    var appStyle = {
        padding:50
    }
    var listStyle ={
        listStyleType: "none",
    }

    var formStyle = {
        display: "block",
        border:"solid"
    }
    var squareStyle = {
            display:"inline-block",
            marginRight: 10
    }

    var inputStyle = {
        width: 200,
        height: 20,
        fontSize:16
    }

    return (
      <div style={appStyle} className="App">
        <ul style={listStyle}><ColorList handleRemove = {this.handleRemove} colors={this.state.squares} count={this.state.count}/></ul>
            <input type="text" value={this.state.inputValue} onChange = {this.handleChange} style = {inputStyle} />
            <ColorButton onClick = {this.handleSubmit} />
            
      </div>
    );
  }
}

class ColorList extends React.Component {
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
        return(
            <div>
                {this.state.colors.map((color) => {
                 return <li key = {color.id} style={squareStyle}><Card {...this.props} id = {color.id} color={color.color} /></li>
                })}
            </div>
        )
    }
}

export default App;
