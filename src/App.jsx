import './App.css';
import Todo from './components/todo/Todo';
import TodoForm from './components/todoForm/TodoForm';
import useTarefaList from './hooks/useTarefaList';
import { useAuth } from './AuthProvider';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import { useEffect, useState } from 'react';

function App() {
  const { currentUser, loading, logout } = useAuth();
  const { todos, addTodo, removeTodo, completeTodo } = useTarefaList();
  const [showLogin, setShowLogin] = useState(true); 
  const [loaded, setLoaded] = useState(false);

  const toggleForm = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
  };

  const handleSignupSuccess = () => {
    setShowLogin(false);
  };

  useEffect(() => {
    if (!loading) {
      setLoaded(true);
    }
  }, [loading]);

  const handleLogout = async () => {
    await logout();
    setShowLogin(true);
  };

  return (
    <div className={`app ${loaded ? 'loaded' : ''}`}>
      <div className='logout'>
        {currentUser && (
          <button onClick={handleLogout} className='logout-btn'>Sair</button>
        )}
      </div>
      {currentUser ? (
        <>
          <TodoForm addTodo={addTodo} />
          {todos.length > 0 && <h2>Lista de tarefas</h2>}
          <div className="todo-list">
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onRemove={() => removeTodo(todo.id)}
                onComplete={() => completeTodo(todo.id)}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          {showLogin ? (
            <>
              <Login onLoginSuccess={handleLoginSuccess} />
              <p className='p'>
                Não tem uma conta?{' '}
                <button onClick={toggleForm}>Cadastre-se</button>
              </p>
            </>
          ) : (
            <>
              <Signup onSignupSuccess={handleSignupSuccess} />
              <p className='p'>
                Já tem uma conta?{' '}
                <button onClick={toggleForm}>Login</button>
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;



