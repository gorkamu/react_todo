import ThemeProvider from './context/ThemeContext';
import { TodoPage } from './pages/TodoPage';

function App() {
  return (
    <ThemeProvider>
      <TodoPage />
    </ThemeProvider>
  );
}

export default App;
