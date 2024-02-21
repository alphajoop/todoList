import { Trash } from 'lucide-react';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

const TodoItem = ({ todo, onDelete, onComplete }: TodoItemProps) => {
  return (
    <li className="py-4 flex justify-between items-center">
      <div className="flex items-center">
        <input
          id={todo.id}
          name=""
          type="checkbox"
          className="h-4 w-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:ring-2"
          checked={todo.completed}
          onChange={() => onComplete(todo.id)}
        />
        <label
          htmlFor={todo.id}
          className={`ml-3 block text-gray-900 ${todo.completed ? 'line-through' : ''}`}
        >
          <span className="text-lg font-medium">{todo.text}</span>
          <span className="text-sm font-light text-gray-500 block font-poppins">Create at {todo.createdAt} </span>
        </label>
      </div>
      <button className="text-red-500 hover:text-red-700" onClick={() => onDelete(todo.id)}>
        <span className="hidden">delete</span>
        <Trash size={20} />
      </button>
    </li>
  );
};

export default TodoItem;
