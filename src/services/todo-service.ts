import axios, { AxiosResponse } from 'axios';
import Todo from '@custom-types/todo';

const API_BASE_URL = import.meta.env.VITE_BASE_URL || '';

export const fetchTodos = async (): Promise<Todo[]> => {
  try {
    const response: AxiosResponse<Todo[]> = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching todos');
  }
};

export const addTodo = async (newTodo: string): Promise<Todo> => {
  try {
    const response: AxiosResponse<Todo> = await axios.post(API_BASE_URL, {
      title: newTodo,
      completed: false,
    });
    return response.data;
  } catch (error) {
    throw new Error('Error adding todo');
  }
};
