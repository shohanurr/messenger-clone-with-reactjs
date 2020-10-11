import React, {useState, useEffect} from 'react';
import Message from './components/message/Message';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{}]);
  const [username, setUsername] = useState('');

  //use state = variable in react
  //use effect = run code on condition

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, [])     //if its blank inside [], this code will run Once when the app component loads.

  //send message method
  const sendMessage = event => {
    event.preventDefault();
    setMessages([...messages, {username: username , text: input}])
    setInput('')
  }

  return (
    <div className="App">
     <h1>Hello clever programmers 🚀 !</h1>
     <h2>Welcome {username} to the chat! 💑</h2>

      <form>
          <FormControl>
          <InputLabel>Enter Your message...</InputLabel>
          <Input  value={input} onChange= {event => setInput(event.target.value)}/>
        <Button disabled={!input} variant= "contained" color="primary" type='submit' onClick={sendMessage}> Send Message </Button>
        </FormControl>

        
      </form>
      
      {
        messages.map(message => (

          <Message username={message.username} text={message.text}/>
        
        ))
      }
    </div>
  );
}

export default App;
