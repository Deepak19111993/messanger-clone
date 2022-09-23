import React, { useEffect, useState } from "react";
import "./App.scss";
import db from "./firebaseData";
import {
  collection,
  addDoc,
  getDocs,
  Timestamp,
  serverTimestamp,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import FlipMove from "react-flip-move";
// import * as firebase from "firebase";
// import { firebase } from "firebase/app";

// const firebase = require("firebase");

function App() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [inputUser, setInputUser] = useState("");
  const [isUser, setIsUser] = useState(-1);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(inputValue);

    // db.collection("messages").add({
    //   message: inputValue,
    //   username: username,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // });

    addDoc(collection(db, "messages"), {
      message: inputValue,
      username: username,
      timestamp: Timestamp.fromDate(new Date()),
    });

    setMessages([...messages, { username: username, message: inputValue }]);
    setInputValue("");
    let filterMessage = messages.filter((e) => {
      return e.username === username;
    });
    // const filter = filterMessage;
    if (filterMessage.length !== 0 || messages.length !== 0) {
      setIsUser(username);
    } else {
      setIsUser([]);
    }
    console.log("filterMessage", filterMessage);
  };

  console.log(username, messages, isUser);

  const handleUserName = () => {
    setUsername(inputUser);
  };

  const ref = collection(db, "messages");
  console.log(ref);

  useEffect(() => {
    async function getMessages() {
      // console.log("iughguhadsuih");
      const messageCol = collection(db, "messages");
      // const order = messageCol.orderBy("timestamp", "desc");
      const q = query(messageCol, orderBy("timestamp", "desc"));
      const messagesSnapshot = await getDocs(q);
      const messageData = messagesSnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      console.log("messageData", messageData);
      // const order = messagesSnapshot.orderBy("timestamp", "desc");
      setMessages(messageData);
    }

    getMessages();
  }, [messages]);

  console.log(messages);

  return (
    <div className="message-Wrapper">
      {!username && (
        <form className="uerinputform">
          <input
            value={inputUser}
            placeholder="Enter Name"
            onChange={(e) => setInputUser(e.target.value)}
          />
          <button onClick={handleUserName}>Click</button>
        </form>
      )}

      {username && (
        <>
          <h1>Messanger</h1>
          <form className="message-input">
            <input
              value={inputValue}
              placeholder="Enter the Message"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" onClick={handleClick}>
              send
            </button>
          </form>
          <div className="message-block">
            <FlipMove>
              {messages.map(({ id, data }) => (
                <div
                  key={id}
                  className={`text-wrapper ${
                    isUser === data?.username ? "user" : "guest"
                  }`}
                >
                  <div className="name">{data?.username}</div>
                  <div className="text">{data?.message}</div>
                </div>
              ))}
            </FlipMove>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
