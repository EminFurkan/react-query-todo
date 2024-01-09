import React, { useState } from 'react';
import Todo from '@custom-types/todo';
import { useAddTodoMutation } from '@hooks/use-query-todos';

const TodoForm: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const mutation = useAddTodoMutation();

  const handleAddTodo = async () => {
    if (newTodo.trim() !== '') {
      try {
        const addedTodo: Todo = await mutation.mutateAsync(newTodo);
        setNewTodo('');
        console.log('Todo added:', addedTodo);
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    }
  };

  console.log("render todoform");

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
