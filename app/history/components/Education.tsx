import Image from "next/image";
import { educationData } from "../data/educationData";
import SectionTitle from "./SectionTitle";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section>
      <SectionTitle icon={<GraduationCap size={30} />} title="학력사항" />
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-6 flex-1"
          >
            <Image
              src={edu.logo}
              alt={`${edu.school} 로고`}
              width={80}
              height={80}
              className="rounded-lg object-contain"
            />
            <div className="flex-1">
              <div className="flex flex-col gap-1 mb-2">
                <h2 className="text-lg font-medium">{edu.school}</h2>
                <p className="text-sm text-gray-500">
                  {edu.startDate} ~ {edu.endDate}
                </p>
              </div>
              <p className="text-sm text-gray-700">
                <span>전공:</span> {edu.fieldOfStudy1}
              </p>
              {edu.fieldOfStudy2 && (
                <p className="text-sm text-gray-700 mt-1">
                  <span>복수전공:</span> {edu.fieldOfStudy2}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
