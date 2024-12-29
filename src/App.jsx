import './App.css';
import Todo from './components/todo/Todo';
import TodoForm from './components/todoForm/TodoForm';
import useTarefaList from './hooks/useTarefaList';
import { useAuth } from './AuthProvider';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import { useEffect, useState } from 'react';
import Search from './components/search/Search';
import Filter from './components/filter/Filter';

function App() {
  const { currentUser, loading, logout } = useAuth();
  const { todos, addTodo, removeTodo, completeTodo } = useTarefaList();
  const [showLogin, setShowLogin] = useState(true); 
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Asc')

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
          {todos.length > 0 && <Search search={search} setSearch={setSearch}/>}
          {todos.length > 0 && <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>}
          <div className="todo-list">
            {todos
            .filter(
              (todo) => filter === 'All' ? true : filter === 'Completed' ? todo.completed : !todo.completed
            )
            .sort(
              (a, b) => sort === 'Asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
            )
            .filter(
              (todo) => todo.text.toLowerCase().includes(search.toLowerCase()
            )
            ).map(
              (todo) => (
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



