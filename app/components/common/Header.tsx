import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* 로고 또는 이름 */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          HYERIN
        </Link>

        {/* 메뉴 */}
        <ul className="flex gap-6 text-sm font-medium text-gray-600">
          <li>
            <Link
              href="/history"
              className="hover:text-black transition-colors"
            >
              History
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-black transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-black transition-colors">
              AboutMe
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
