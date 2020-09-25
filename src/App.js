import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import "./App.css";
import firebase from 'firebase';
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState("");
  const [username, setUsername] = useState("");
  // useState = variable in REACT

  // useEffect = run code on a condition in REACT

  useEffect(() => {
    // run once when the app componenet loads
    db.collection("messages").onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  useEffect(() => {
    setUsername(prompt("Please enter your name"));
    // run code here ...
    // if its blank inside [], this code  runs ONCE when the app component loads.
  }, []); //condition

  
    

const sendMessage = event => {
 event.preventDefault();
 db.collection("messages").add({
message: input,
username: username,
timestamp: firebase.firestore.FieldValue.serverTimestamp()
 });
setMessages([...messages, { username: username, text: input }]);
setInput("");
 };


  return (
    <div className="App">
      <h1>Hello Clever Programmer</h1>
      <h2>Welcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

        <Button
             disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}>
            Send Message
          </Button> 
        </FormControl>
      </form>
      

      {/*messanger */}
      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
};

export default App;
