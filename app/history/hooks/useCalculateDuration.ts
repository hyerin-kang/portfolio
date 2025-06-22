import { differenceInMonths, parse } from "date-fns";
import { carreers } from "../data/careerData";

export const useCalculateDuration = () => {
  // 날짜 계산 함수
  const calculateDuration = (startStr: string, endStr: string) => {
    const parseDate = (str: string) =>
      parse(str.trim(), "yyyy.MM.dd", new Date());
    const start = parseDate(startStr);
    const end = parseDate(endStr);
    const totalMonths = differenceInMonths(end, start);
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return { years, months, totalMonths };
  };

  let totalMonths = 0;

  const carreersWithDuration = carreers.map((career) => {
    const [start, end] = career.period.split("~");
    const {
      years,
      months,
      totalMonths: monthsThisJob,
    } = calculateDuration(start, end);
    totalMonths += monthsThisJob;
    return {
      ...career,
      durationText: `${years}년 ${months}개월`,
    };
  });

  const totalYears = Math.floor(totalMonths / 12);
  const totalRemainingMonths = totalMonths % 12;

  return {
    carreersWithDuration,
    totalYears,
    totalRemainingMonths,
  };
};
