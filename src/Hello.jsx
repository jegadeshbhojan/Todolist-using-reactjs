import React from "react";
//import App from './App.js';
export default class Hello extends React.Component{
   
   constructor(props){
       super(props);
       this.state=(
           {names:'jegadeshB'});

   }

 checkinput=(e)=>{
     let character_count=document.getElementsByClassName("validationcheck");

if(character_count.length< 8){
    console.log("wrong");
}


}
 checkFunction=(e)=>{
   // alert("success");
    this.setState=({
        names:'bhojanJegadesh'});
    //alert('2nd success');
    
    }


        render(){
         

            
        return(
            
        <div>
        <button onClick={this.checkFunction}>{this.state.names}</button>
        <input type="text" className="validationcheck" onChange={this.checkinput}></input>
        </div>
        )
    }
}
