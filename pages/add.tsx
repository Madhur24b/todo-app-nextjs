import { useState } from 'react';
import { useTodos, Todo } from '../context/TodoContext';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';
import { v4 as uuidv4 } from 'uuid';

export default function AddPage() {
  const { addTodo } = useTodos();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo: Todo = { id: uuidv4(), title, description };
    addTodo(newTodo);
    router.push('/view');
  };

  return (
    <>
      <NavBar />
      <main className="min-h-screen flex items-center justify-center bg-purple-800">
        <form onSubmit={handleSubmit} className="bg-cyan-600 p-6 rounded-lg w-full max-w-md">
          <h1 className="text-yellow-300 text-3xl font-bold mb-4 text-center">Add TODO</h1>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-4 rounded bg-yellow-200"/>
          <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 mb-4 rounded bg-yellow-200"/>
          <button type="submit" className="w-full bg-pink-600 text-yellow-200 py-2 rounded">+ Add TODO</button>
        </form>
      </main>
    </>
  );
}