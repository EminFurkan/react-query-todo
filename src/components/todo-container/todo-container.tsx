import './todo-container.scss';
import TodoList from '@components/todo-list/todo-list';
import TodoForm from '@components/todo-form/todo-form';

const TodoContainer = () => {

  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoContainer;
