import React, { Component } from 'react';
import './App.css';
import {Card} from './Components/CardComponents/ColorCard'
import PaletteStart from './Components/PaletteStart'
import AddColor from './Components/AddColor/AddColor'
import Palette from "./Components/Palette"
import ToggleDisplay from 'react-toggle-display';

class App extends Component {
    constructor(){
        super();
        this.state = {
            paletteName:"",
            newPaletteInput:"",
            existingPaletteInput: "",
            squares: [
            ],
            inputValue: "",
            count: 1
        }
        this.handleColorCodeChange = this.handleColorCodeChange.bind(this)
        this.handleAddColor = this.handleAddColor.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleGetPaletteInputChange = this.handleGetPaletteInputChange.bind(this)
        this.handleGetPalette = this.handleGetPalette.bind(this)
        this.handleNewPaletteInput = this.handleNewPaletteInput.bind(this)
        this.handleNewPalette = this.handleNewPalette.bind(this)
    }
    componentWillMount(){
        var count = -1
        var colors = []
    }
    
    handleColorCodeChange(event){
        var newValue = ""
        var currentInput = event.target.value
        console.log(currentInput)
        if((!currentInput.includes("#"))){
            newValue = "#" + currentInput
        }
        else if(currentInput == "#"){
            newValue = ""
        }
        else{
            newValue = currentInput
        }
        this.setState({
            inputValue: newValue
        })
    }
    
    handleAddColor(event){
        this.setState({
            count: this.state.count+1
        })
        var count = this.state.count;
        
        console.log(this.state.squares)
        this.setState({
            squares: [...this.state.squares,{id:this.state.count,color:this.state.inputValue}],
        },()=>{
        })
        var nameWithoutSpaces = this.state.paletteName.replace(" ","%20")
        let url = "http://localhost:8080/addColor/"+nameWithoutSpaces
        fetch(url,{
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({color:this.state.inputValue})
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
        var nameWithoutSpaces = this.state.paletteName.replace(" ","%20")
        let url = "http://localhost:8080/addColor/"+nameWithoutSpaces
        
    }
    
    handleGetPaletteInputChange(event){
        this.setState({
            existingPaletteInput: event.target.value
        })
    }
    handleGetPalette(event){
        //Set the palette name appropriatly
        var name = this.state.existingPaletteInput
        this.setState({
            paletteName:name
        })
        var nameWithoutSpaces = name.replace(" ","%20")
        console.log("name ",name)

        //update the color cards
        var colors = []
        let url = "http://localhost:8080/getColorsByName/"+nameWithoutSpaces
        fetch(url).then((response)=>{
            response.json().then(result=>{
                colors = result.colors
                colors.forEach(color=>{
                    this.setState({
                        squares: [...this.state.squares,{id:this.state.count,color}],
                        count:this.state.count+1
                    })
                })
            })
        })
       
    }
    
    handleNewPaletteInput(event){
        this.setState({
            newPaletteInput: event.target.value
        })
    }
    handleNewPalette(event){
        var name = this.state.newPaletteInput
        this.setState({
            paletteName:name
        })
        var nameWithoutSpaces = name.replace(" ","%20")
        let url = "http://localhost:8080/newPalette/"
        fetch(url,{
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user:"New User",paletteName:name})

        })
    }


  render() {
    var appStyle = {
        padding:50
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
        width: 250,
        height: 20,
        fontSize:16,
        padding: 5
    }

    return (
      <div style={appStyle} className="App">
        <ToggleDisplay if={this.state.paletteName != ""}>
            <h1>{this.state.paletteName}</h1>
        </ToggleDisplay>
        <ToggleDisplay if={this.state.paletteName == ""}>
<<<<<<< HEAD
            <PaletteInput inputStyles={inputStyle} handleExistingPaletteInput={this.handleGetPaletteInputChange} handleGetPalette = {this.handleGetPalette} handleNewPaletteInput = {this.handleNewPaletteInput} 
        handleNewPalette = {this.handleNewPalette}/>
=======
            <PaletteStart inputStyles={inputStyle} handleExistingPaletteInput={this.handleGetPaletteInputChange} handleGetPalette = {this.handleGetPalette}/>
>>>>>>> backend
        </ToggleDisplay>
        
        <Palette handleRemove = {this.handleRemove} colors={this.state.squares} count={this.state.count}/>
        
<<<<<<< HEAD
        <PaletteSection value= {this.state.inputValue} handleChange = {this.handleColorCodeChange} inputStyle = {inputStyle} handleAddColor = {this.handleAddColor} />
=======
        <AddColor value= {this.state.inputValue} handleChange = {this.handleColorCodeChange} inputStyle = {inputStyle} handleSubmit = {this.handleSubmit} />
>>>>>>> backend
            
      </div>
    );
  }
}



export default App;
