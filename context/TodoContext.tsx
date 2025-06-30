import { createContext, useContext, useState, useEffect } from "react";

export type Todo = {
  id: string;
  title: string;
  description: string;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  setTodos: (todos: Todo[]) => void;
};

const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  setTodos: () => {},
});

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
      setTodos(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ✅ THIS FUNCTION
  const addTodo = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}