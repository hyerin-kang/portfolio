import Image from "next/image";
import React from "react";

export const Profile = () => {
  return (
    <section className="flex-col items-center md:flex-row flex flex-wrap gap-10">
      <div className="w-[250px] rounded-full overflow-hidden">
        <Image
          src="/images/image-profile.jpg"
          alt="프로필 이미지"
          width={300}
          height={300}
        />
      </div>
      <div className=" flex-1 p-8 border border-gray-400 rounded-lg bg-white flex items-center justify-center text-center leading-8 text-lg">
        <div className="break-keep text-gray-800">
          <span className="bg-blue-100 p-1 rounded-md font-bold text-blue-900">
            웹 디자인부터 웹 퍼블리싱까지
          </span>{" "}
          경험한 프론트엔드 개발자입니다.
          <br />
          디자인감각과 웹 표준에 대한 이해를 바탕으로, <br />
          사용자 친화적이고 직관적인 UI를 구현하는 데 강점을 가지고 있습니다.
          <br />
          최근에는 JavaScript, React, TypeScript, Next.js 등 최신 기술을 익히며
          <br />
          개발 역량을 꾸준히 키워가고 있습니다.
        </div>
      </div>
    </section>
  );
};
