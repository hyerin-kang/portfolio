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
            <li key={index} className="mb-10 ml-6">
              <span className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1.5 border-2 border-white" />
              <h2 className="text-xl font-semibold flex items-center gap-2 flex-wrap leading-normal">
                <span>{career.company}</span>
                <div className="w-[2px] h-[15px] bg-gray-500"></div>
                <span>{career.position1}</span>
                <div className="w-[2px] h-[15px] bg-gray-500"></div>
                <span>{career.position2}</span>
              </h2>
              <p className="text-sm text-gray-500 mb-1">
                {career.period} ({career.durationText})
              </p>
              <p className="text-gray-800">{career.description}</p>
              <p className="mt-2 text-sm text-gray-600">
                <strong>기술 스택:</strong> {career.skill.join(", ")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
