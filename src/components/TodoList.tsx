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
    todos.length === 0 ? (
      <p className="text-gray-500 text-center py-4">Empty task lists at the moment.</p>
    ) : (
      <ul className="w-full max-w-md mx-auto px-4 py-2 divide-y divide-gray-200">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onComplete={onComplete} />
        ))}
      </ul>
    )
  );
};

export default TodoList;
