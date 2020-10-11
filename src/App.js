import React, {useState} from 'react';
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
        <input  value={input} onChange= {event => setInput(event.target.value)}/>
        <button type='submit' onClick={sendMessage}> Send Message </button>
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
