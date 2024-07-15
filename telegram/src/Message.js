import React, { forwardRef } from 'react';
import './Message.scss';
import { timeAgo } from './utils';

const Message = forwardRef(({ id, content: {sender_id, sender, message, created_at } }, ref) => {
  const isUserMessage = sender_id === 1;
  
  return (
    <div ref={ref} className={`message ${isUserMessage ? 'user--message' : 'other--message'}`}>
      <p>
        {message}
        {created_at && (
          <small className={`timestamp ${isUserMessage ? 'user--timestamp' : 'other--timestamp'}`}>
            {timeAgo(created_at)}
          </small>
        )}
      </p>
    </div>
  );
});

export default Message;
