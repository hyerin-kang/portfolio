"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Github, Globe } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const [copied, setCopied] = useState(false);
  const email = "hknag0420@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      alert("이메일 주소가 복사 되었습니다!");
    });
  };

  return (
    <section className="container mx-auto w-fit h-full">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-[280px] h-[360px] relative rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/about-profile.jpg"
            alt="강혜린 프로필 이미지"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-gray-800 text-lg leading-relaxed text-center md:text-left">
          <p className="mb-2">💻 낮에는 코드를 짜고</p>
          <p className="mb-2">🌙 밤에는 버그와 싸우는</p>
          <p className="mb-2">
            <strong className="text-blue-700">프론트엔드 개발자 강혜린</strong>
            입니다.
          </p>
          <p>
            성장중독자, 배움수집가, <br />
            UI 고집쟁이로 불리곤 합니다.
          </p>
        </div>
      </div>

      <div className="mt-12 border-t pt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          🔗 Contact & Links
        </h2>
        <ul className="space-y-4 text-md text-gray-800  bg-white p-10 rounded-2xl shadow-md">
          <li className="flex items-center gap-3 justify-center">
            <Globe size={20} />
            <a
              href="https://rinny01.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition text-gray-900"
            >
              블로그 구경하러 가기 ✍️
            </a>
          </li>
          <li className="flex items-center gap-3  justify-center">
            <Github size={20} />
            <a
              href="https://github.com/hyerin-kang"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition  text-gray-900"
            >
              코드 구경은 여기서 🛠️
            </a>
          </li>
          <li
            className="flex items-center gap-3 cursor-pointer select-none  justify-center"
            onClick={copyToClipboard}
            title="클릭해서 이메일 주소 복사"
          >
            <Mail size={20} />
            <span className="font-semibold text-blue-600 hover:underline">
              {email}
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
