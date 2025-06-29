import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  const linkClass = (path: string) =>
    `px-4 py-2 rounded hover:bg-yellow-300 hover:text-black transition ${router.pathname === path ? 'bg-yellow-400 text-black font-bold' : ''}`;
  return (
    <nav className="bg-red-600 p-4 text-yellow-200 flex gap-4 justify-center">
      <Link href="/add" className={linkClass('/add')}>Add</Link>
      <Link href="/view" className={linkClass('/view')}>View</Link>
      <Link href="/edit" className={linkClass('/edit')}>Edit</Link>
    </nav>
  );
}