import { differenceInMonths, parse } from "date-fns";
import React from "react";
import { carreers } from "../data/careerData";
import { useCalculateDuration } from "../hooks/useCalculateDuration";
import SectionTitle from "./SectionTitle";
import { Briefcase } from "lucide-react";

export const Career = () => {
  const { carreersWithDuration, totalYears, totalRemainingMonths } =
    useCalculateDuration();

  return (
    <section>
      <SectionTitle
        icon={<Briefcase size={24} />}
        title={"경력사항"}
        subtitle={
          <>
            총 경력:{" "}
            <strong>
              {totalYears}년 {totalRemainingMonths}개월
            </strong>
          </>
        }
      />
      <div className="px-4">
        <ul className="relative border-l border-gray-300">
          {carreersWithDuration.map((career, index) => (
            <li key={index} className="mb-10 ml-6 relative">
              <span className="absolute w-4 h-4 bg-blue-500 rounded-full -left-8 top-1.5" />
              <div className="flex-col flex md:items-center md:flex-row gap-2">
                <h2 className="text-xl font-semibold flex items-center gap-2 flex-wrap leading-normal">
                  <span>{career.company}</span>
                  <div className="w-[2px] h-[15px] bg-gray-500"></div>
                  <span>{career.position1}</span>
                  <div className="w-[2px] h-[15px] bg-gray-500"></div>
                  <span>{career.position2}</span>
                </h2>
                {/* 기간 */}
                <p className="text-md text-gray-500">
                  {career.period} ({career.durationText})
                </p>
              </div>
              <ul className="text-lg text-gray-950 mt-2 flex flex-col flex-wrap gap-2 pl-2">
                {career.description.map((item, index) => (
                  <li
                    key={index}
                    className="before:content-[''] before:inline-block before:w-[5px] before:h-[5px] before:rounded-full before:bg-gray-700 before:absolute before:top-2.5 before:left-0 relative before:mr-2 pl-4"
                  >
                    {/* 텍스트 출력 */}
                    {item.text}

                    {/* 링크가 있다면 들여써서 출력 */}
                    {item.links && (
                      <ul className="mt-1 pl-1 text-sm text-blue-700 space-y-1">
                        {item.links.map((link, i) => (
                          <li key={i}>
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-blue-900"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <p className="mt-2 text-md text-gray-600">
                <strong>기술 스택:</strong> {career.skill.join(", ")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
