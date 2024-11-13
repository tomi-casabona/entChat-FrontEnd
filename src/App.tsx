import './App.css';
import { InputChat } from './components/InputChat';
import { ChatBoard } from './components/ChatBoard';

function App() {
  return (
    <>
      <div>
        <ChatBoard />
        <InputChat />
      </div>
    </>
  );
}

export default App;
