import TodoItem from './TodoItem';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

const TodoList = ({ todos, onDelete, onComplete }: TodoListProps) => {
  return (
    <ul className="w-full max-w-md mx-auto px-4 py-2 divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onComplete={onComplete} />
      ))}
    </ul>
  );
};

export default TodoList;
