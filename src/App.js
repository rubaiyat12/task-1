import React from 'react';
import './App.css';

class App extends React.Component {
  
  state = {
    name: "circle"

  }

 startRotation = () =>{
    this.setState({
      name:"circle start-rotate" 
    });

    setTimeout(() =>{
      
      this.setState({
        name:"circle start-rotate stop-rotate",
         
        
      });
    }, Math.floor(Math.random()*5000)+1);
    }


  render(){
  return (
    <div>
      <div className='arrow'></div>
      <ul className={this.state.name}>
        <li>
          <div className='text' contentEditable="true" spellCheck="false">
            Ashik
          </div>

        </li>
        <li>
          <div className='text' contentEditable="true" spellCheck="false">
            Anik
          </div>

        </li>
        <li>
          <div className='text' contentEditable="true" spellCheck="false">
            Dip
          </div>

        </li>
        <li>
          <div className='text' contentEditable="true" spellCheck="false">
            Niti
          </div>

        </li>
        <li>
          <div className='text' contentEditable="true" spellCheck="false">
            Manzil
          </div>

        </li>
        

      </ul>
      <button className='button' onClick={this.startRotation}>Spin It!</button>
      
      
    </div>
  );
}
}

export default App;
