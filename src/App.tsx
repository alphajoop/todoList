import { format } from 'date-fns';
import React, { useState } from 'react';
import TodoList from './components/TodoList';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: inputValue,
        completed: false,
        createdAt: format(new Date(), "dd/MM/yyyy HH:mm:ss"),
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-full md:max-w-lg mx-auto bg-white md:shadow-lg rounded-lg overflow-hidden mt-16 px-3">
      <div className="px-4 py-2">
        <h1 className="text-black font-bold text-2xl uppercase font-ubuntu">To Do List</h1>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto px-4 py-2 font-poppins">
        <div className="flex items-center border-b-2 border-indigo-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add a task"
          />
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-md text-white py-1 px-2 rounded-md font-ubuntu"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
      <TodoList todos={todos} onDelete={deleteTodo} onComplete={toggleTodo} />
    </div>
  );
};

export default App;
