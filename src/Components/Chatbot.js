import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import { analyze } from '../utils';

const Chatbot = () => {
  const [messages, setMessage] = useState([{ message: 'Hey, I’m Asraf Bot 🤖 — What do you want to know about Asraf' }]);
  const [text, setText] = useState('');

 const onSend = () => {
  const newUserMsg = { message: text, user: true };
  let updatedMessages = [...messages, newUserMsg];

  const reply = analyze(text);
  updatedMessages = [...updatedMessages, { message: reply }];

  setMessage(updatedMessages);
  setText("");

  setTimeout(() => {
    document.querySelector('#copyright')?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
};

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-light bg-light shadow-sm px-4 py-2 fixed-top">
        <span className="navbar-brand mb-0 h1 d-flex align-items-center">
          <i className="bi bi-stars text-primary fs-4 me-2"></i>
          <span className="fw-bold text-primary">Asraf Bot</span>
        </span>
      </nav>

      {/* Chatbot Container */}
      <div className="container py-4 mt-5">
        <div className='d-flex align-items-center justify-content-center mb-3'>
          <img src='data:image/jpeg;base64,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' alt='logo' style={{ width: 80, height: 80 }} />
          <h2 className='text-primary ms-2'>ChatBot</h2>
        </div>

        <div className='chat-message'>
          {messages.length > 0 ? (
            messages.map((data, index) => (
              <ChatMessage key={index} {...data} />
            ))
          ) : (
            <div className="text-center text-muted my-4 fade-in">
              <i className="bi bi-chat-dots fs-1 text-primary d-block mb-2"></i>
              <p>Start a conversation with the bot...</p>
            </div>
          )}

          <div className='d-flex mt-3'>
            <input
              type="text"
              className='form-control'
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type your message..."
            />
            <button className='btn btn-primary ms-2' onClick={onSend}>Send</button>
          </div>

          <div id='copyright' className='mt-4 text-center text-muted small'>
            © Asraf — All rights reserved
          </div>
        </div>

        <div className="chat-footer text-center mt-4">
          <h5 className="asraf-signature">🤖 Powered by Asraf's Bot</h5>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
