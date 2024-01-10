import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient, QueryClientProvider } from './query-client.ts';
import TodoContainer from './components/todo-container/todo-container';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
