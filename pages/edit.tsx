import { useTodos, Todo } from '../context/TodoContext';
import NavBar from '../components/NavBar';

export default function EditPage() {
  const { todos, updateTodo, deleteTodo } = useTodos();

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-purple-800 p-10 text-yellow-200">
        <div className="max-w-xl mx-auto bg-cyan-600 rounded-xl p-6 shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Edit TODOs</h1>
          {todos.length === 0 ? <p>No TODOs to edit.</p> : (
            <ul className="space-y-4">
              {todos.map((todo) => (
                <li key={todo.id} className="bg-yellow-300 text-black p-4 rounded">
                  <input
                    className="w-full mb-2 p-2 rounded"
                    value={todo.title}
                    onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
                  />
                  <textarea
                    className="w-full p-2 rounded"
                    value={todo.description}
                    onChange={(e) => updateTodo({ ...todo, description: e.target.value })}
                  />
                  <button onClick={() => deleteTodo(todo.id)} className="mt-2 bg-pink-600 text-yellow-200 px-4 py-2 rounded hover:bg-pink-500">
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}