import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Card} from './square'
import firebase from 'firebase'
import reactfire from 'reactfire'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAb72N_X06ilinY2jMx7p003gtTx3Od8dk",
    authDomain: "reactjs-321fb.firebaseapp.com",
    databaseURL: "https://reactjs-321fb.firebaseio.com",
    projectId: "reactjs-321fb",
    storageBucket: "reactjs-321fb.appspot.com",
    messagingSenderId: "1000229939166"
  };
  firebase.initializeApp(config);
class App extends Component {
    constructor(){
        super();
        var query = firebase.database().ref("myapp/count")
        console.log(query)
        this.state = {
            squares: [
            ],
            inputValue: "",
            count: 1
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }
    componentWillMount(){
        var count = -1
        var colors= []
       
        
     
    }
    componentWillUnmount(){
        this.firebaseRef.off();
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
    var buttonStyle = {
        backgroundColor: "#4CAF50",
        border: "none",
        color:"white",
        textAlign: "center",
        textDecoration: "none",
        fontSize:16,
        padding: "10px 32px",
        cursor: "pointer",
        marginLeft: 10
    }

    return (
      <div style={appStyle} className="App">
        <ul style={listStyle}><ColorList handleRemove = {this.handleRemove} colors={this.state.squares} count={this.state.count}/></ul>
            <input type="text" value={this.state.inputValue} onChange = {this.handleChange}/>
            <button style = {buttonStyle} onClick = {this.handleSubmit}>Add Color</button>
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
