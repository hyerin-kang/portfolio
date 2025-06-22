"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const typingText = "프론트엔드 개발자 강혜린 입니다.";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (index < typingText.length) {
      timeout = setTimeout(() => {
        setTypedText((prev) => prev + typingText[index]);
        setIndex(index + 1);
      }, 100);
    } else {
      // 타이핑 완료 후 1.5초 뒤 초기화
      timeout = setTimeout(() => {
        setTypedText("");
        setIndex(0);
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
        FRONT-END DEVELOPER
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium h-12 text-gray-700">
        {typedText}
        {/* <span className="animate-blink">|</span> */}
      </h2>

      <div className="mt-10 flex gap-4 flex-wrap justify-center">
        <Link
          href="/history"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          HISTORY
        </Link>
        <Link
          href="/projects"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          PROJECTS
        </Link>
        <Link
          href="/about"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          ABOUT
        </Link>
      </div>
    </div>
  );
}
