import React, {useState} from 'react';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hello', 'i love esha', 'i want to fuck her hard', 'want to suck her boobs,grab her ass']);

  console.log(input);
  console.log(messages);

  //send message method
  const sendMessage = event => {
    event.preventDefault();
    setMessages([...messages, input])
    setInput('')
  }

  return (
    <div className="App">
     <h1>Hello clever programmers 🚀 !</h1>

      <form>
          <FormControl>
          <InputLabel>Enter Your message...</InputLabel>
          <Input  value={input} onChange= {event => setInput(event.target.value)}/>
        <Button disabled={!input} variant= "contained" color="primary" type='submit' onClick={sendMessage}> Send Message </Button>
        </FormControl>

        
      </form>
      
      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
