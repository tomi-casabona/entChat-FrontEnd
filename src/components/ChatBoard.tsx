import { useEffect } from 'react';
import { useMessageContext } from '../Context/MessagesContext';

export const ChatBoard = () => {
  const { allMessages, setAllMessages } = useMessageContext();

  useEffect(() => {
    if (
      allMessages.length > 0 &&
      allMessages[allMessages.length - 1].by === 'user'
    ) {
      setAllMessages([
        ...allMessages,
        { by: 'bot', text: 'Hello, Im an AI bot ready to help you' },
      ]);
    }
  }, [allMessages]);

  return (
    <div>
      <h1>Conversation with entChat</h1>
      {allMessages.map((message, index) => (
        <div
          key={index}
        >{`${message.by === 'user' ? 'User:  ' : 'entBot:  '}${message.text}`}</div>
      ))}
    </div>
  );
};
