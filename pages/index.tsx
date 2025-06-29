import Link from 'next/link'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-purple-900 text-yellow-200">
        <h1 className="text-4xl font-bold mb-6">Welcome to the TODO App!</h1>
        <div className="flex gap-6">
          <Link href="/add" className="bg-pink-600 px-6 py-3 rounded hover:bg-pink-400 transition">Add TODO</Link>
          <Link href="/view" className="bg-cyan-600 px-6 py-3 rounded hover:bg-cyan-400 transition">View TODOs</Link>
          <Link href="/edit" className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-300 transition">Edit TODOs</Link>
        </div>
      </main>
    </>
  )
}