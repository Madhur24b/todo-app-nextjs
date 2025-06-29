import { useTodos } from '../context/TodoContext';
import NavBar from '../components/NavBar';

export default function ViewPage() {
  const { todos } = useTodos();
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-purple-700 p-10 text-yellow-200">
        <div className="max-w-xl mx-auto bg-cyan-600 rounded-xl p-6 shadow-lg">
          <h1 className="text-2xl font-bold mb-4">View TODOs</h1>
          {todos.length === 0 ? <p>No TODOs found.</p> : (
            <ul className="space-y-4">
              {todos.map((todo) => (
                <li key={todo.id} className="bg-yellow-300 text-black p-4 rounded">
                  <h2 className="font-semibold">{todo.title}</h2>
                  <p>{todo.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}