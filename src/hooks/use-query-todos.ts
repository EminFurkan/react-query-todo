import { useQuery, useMutation, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
import { fetchTodos, addTodo } from '@services/todo-service';
import Todo from '@custom-types/todo';

export function useQueryTodos() {
  return useQuery<Todo[], AxiosError>('todos', fetchTodos, {
    refetchOnMount: true,
    refetchOnWindowFocus: true
  });
}

export function useAddTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation<Todo, AxiosError, string>(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
    onSettled: (data, error, variables) => {
      console.log('Mutation completed:', data, error);
    },
  });
}
