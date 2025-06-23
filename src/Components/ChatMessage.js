import React from 'react';

const ChatMessage = (props) => {
  const isUser = props.user;

  return (
    <div className={`d-flex mb-3 ${isUser ? 'justify-content-end' : 'justify-content-start'} fade-in`}>
      {!isUser && (
        <>
          <i className="bi bi-robot icon avatar me-2 text-secondary"></i>
          <div className="message-bubble message-left shadow">
            <span className="message-text">{props.message}</span>
          </div>
        </>
      )}
      {isUser && (
        <>
          <div className="message-bubble message-right shadow">
            <span className="message-text">{props.message}</span>
          </div>
          <i className="bi bi-person-circle icon avatar ms-2 text-primary"></i>
        </>
      )}
    </div>
  );
};

export default ChatMessage;
