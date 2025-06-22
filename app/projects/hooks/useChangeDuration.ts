import { differenceInDays, parse } from "date-fns";

export const getDurationDays = (duration: string): number => {
  const [startStr, endStr] = duration.split(" - ").map((s) => s.trim());

  const start = parse(startStr, "yyyy.MM.dd", new Date());
  const end = parse(endStr, "yyyy.MM.dd", new Date());

  return differenceInDays(end, start) + 1;
};
