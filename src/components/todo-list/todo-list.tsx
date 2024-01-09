import React from 'react';
import { useQueryTodos } from '@hooks/use-query-todos';
import Todo from '@custom-types/todo';
import TodoStates from '@enums/todo-states';

const TodoList: React.FC = () => {
  const { data: todos, isLoading, isError, isStale, refetch } = useQueryTodos();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching todos</p>;
  }

  console.log("render todolist");

  return (
    <ul>
      {todos &&
        todos.map((todo: Todo) => (
          <li key={todo.id}>
            {todo.title} -{' '}
            {todo.completed ? TodoStates.Complete : TodoStates.Incomplete}
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
