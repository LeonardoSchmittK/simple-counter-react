 import React, {Component} from 'react';

  const style={
        fontFamily:'cursive',color:'grey',fontSize:100,
        textShadow:'2px 1px 4px orange',margin:'auto',textAlign:'center'
      }

class Salute extends React.Component{
    constructor(props){
      super(props); 
      this.state={
            message:"..."
      }
    }
  
       componentDidMount(){
         setTimeout(()=>{
           this.setState({
               message:"Hello, World"
           })
         },1400);
       }
      
    
    render(){ 
      return(
        <> 
          <h1 style={style}>{this.state.message}</h1>
        </>
      );
    };
};

function App() {
  return (
    <div className="App">
      <Salute />
    </div>
  );
}

export default App;
