import Link from "next/link";

export const Header = () => {
  return (
    <header className="">
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <Link href="/">Home</Link>
        <Link href="/history">History</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};
