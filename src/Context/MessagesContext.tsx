import { createContext, useContext, useState, ReactNode } from 'react';
import { Message, MessageContextType } from '../types'; 



const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const MessageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const [allMessages, setAllMessages] = useState<Message[]>([]);

  return (
    <MessageContext.Provider
      value={{ currentMessage, setCurrentMessage, allMessages, setAllMessages }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageContext = (): MessageContextType => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessageContext must be used within a MessageProvider');
  }
  return context;
};
