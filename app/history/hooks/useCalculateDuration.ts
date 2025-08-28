import { differenceInMonths, parse } from "date-fns";
import { carreers } from "../data/careerData";

const normalizeYearMonth = (str: string) => {
  const parts = str.split(".");
  if (parts.length < 2) return str;

  const year = parts[0];
  let month = parts[1].padStart(2, "0");
  let day = parts[2] ? parts[2].padStart(2, "0") : "01";

  return `${year}.${month}.${day}`;
};

export const useCalculateDuration = () => {
  const calculateDuration = (startStr: string, endStr: string) => {
    const parseYearMonth = (str: string) => {
      const trimmed = str.trim();
      if (trimmed === "현재" || trimmed === "now" || trimmed === "") {
        return new Date();
      }
      const normalized = normalizeYearMonth(trimmed);
      const parsed = parse(normalized, "yyyy.MM.dd", new Date());
      if (isNaN(parsed.getTime())) {
        throw new Error(`Invalid date format: ${trimmed}`);
      }
      return parsed;
    };

    const start = parseYearMonth(startStr);
    const end = parseYearMonth(endStr);

    if (start > end) {
      throw new Error(`Start date ${startStr} is after end date ${endStr}`);
    }

    const totalMonths = differenceInMonths(end, start) + 1;

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return { years, months, totalMonths };
  };

  let totalMonths = 0;

  const carreersWithDuration = carreers.map((career) => {
    const [start, end] = career.period.split("~").map((str) => str.trim());
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
