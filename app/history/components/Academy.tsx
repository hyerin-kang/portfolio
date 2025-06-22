import { NotebookPen } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { academyData } from "../data/academyData";
import Image from "next/image";

export const Academy = () => {
  return (
    <section>
      <SectionTitle icon={<NotebookPen size={24} />} title={"교육활동"} />
      <ul className="divide-y divide-gray-200">
        {academyData.map((academy, index) => (
          <li
            key={index}
            className="flex-col md:flex-row flex items-center gap-4 py-4"
          >
            <div className="w-[100px]">
              <Image
                src={academy.logo}
                alt={`${academy.academy} 로고`}
                width={100}
                height={100}
              />
            </div>
            <div className="flex-1">
              <p className="text-base	 text-gray-500 mb-1">
                {academy.startDate} ~ {academy.endDate}
              </p>
              <p className="text-gray-900 text-lg font-medium">
                {academy.fieldOfStudy1}
              </p>
              {academy.fieldOfStudy2 && (
                <p className="text-gray-700">{academy.fieldOfStudy2}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
