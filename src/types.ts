export type Message = {
  by: 'user' | 'bot';
  text: string;
};
export type MessageContextType = {
  currentMessage: string;
  setCurrentMessage: (message: string) => void;
  allMessages: Message[];
  setAllMessages: (messages: Message[]) => void;
};
