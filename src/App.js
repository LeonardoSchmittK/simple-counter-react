 import React, {Component} from 'react';

  const style={
        fontFamily:'cursive',color:'black',fontSize:300,
        textShadow:'5px 4px 10px grey',margin:'auto',textAlign:'center'
      }

  class Salute extends React.Component{
    constructor(props){
      super(props); 
      this.state={
           count:0
      }
    }
    reset() {
      this.setState({
        count: 0
      });
    }
    increment() {
      this.setState(state => ({
        count: this.state.count + 1
      }));
    }
    decrement() {
      this.setState(state => ({
        count: this.state.count - 1
      }));
    }
    render(){ 
      return(
        <> 
          <button style={{fontSize:23}} className='inc' onClick={this.increment.bind(this)}>Increment</button>

          <button style={{fontSize:23}} className='dec' onClick={this.decrement.bind(this)}>Decrement</button>

          <button style={{fontSize:23}} className='reset' onClick={this.reset.bind(this)}>Reset</button>

          <h1 style={style}> {this.state.count} </h1>
          
        
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
