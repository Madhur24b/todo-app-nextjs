import React, { createContext, useState, useContext, ReactNode } from 'react';
export interface Todo { id: string; title: string; description?: string; }
interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
}
const TodoContext = createContext<TodoContextType | undefined>(undefined);
export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (todo: Todo) => setTodos((prev) => [...prev, todo]);
  const updateTodo = (todo: Todo) => setTodos((prev) => prev.map((t) => t.id === todo.id ? todo : t));
  const deleteTodo = (id: string) => setTodos((prev) => prev.filter((t) => t.id !== id));
  return (<TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>{children}</TodoContext.Provider>);
};
export const useTodos = () => { const context = useContext(TodoContext);
  if (!context) throw new Error('useTodos must be used within a TodoProvider'); return context; };