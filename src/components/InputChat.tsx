import { useMessageContext } from '../Context/MessagesContext';
import { Message } from '../types';
import { Button } from './Button';
import IconArrow from './IconArrow';

export const InputChat = () => {
  const { allMessages, setAllMessages, currentMessage, setCurrentMessage } =
    useMessageContext();

  const handleClick = () => {
    const newMessage: Message = {
      by: 'user',
      text: currentMessage,
    };
    setAllMessages([...allMessages, newMessage]);
    setCurrentMessage('');
  };
  return (
    <div>
      <input
        data-testid="input"
        type="text"
        placeholder="Send a message to entChat"
        onChange={(e) => setCurrentMessage(e.target.value)}
        value={currentMessage}
      ></input>
      <Button onClick={handleClick} icon={IconArrow}></Button>
    </div>
  );
};
