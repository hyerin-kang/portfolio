interface CareersType {
  company: string;
  position1: string;
  position2: string;
  period: string;
  skill: string[];
  description: string;
}

export const carreers: CareersType[] = [
  {
    company: "키즐링",
    position1: "인턴",
    position2: "프론트엔드 개발",
    period: "2025.06.04 ~ 2025.07.01",
    skill: ["React", "TypeScript", "Tailwind CSS"],
    description:
      "키즐링에서 프론트엔드 개발 인턴으로 참여하여, 웹 애플리케이션의 UI/UX 개선 작업을 수행했습니다.",
  },
  {
    company: "제스아이앤씨",
    position1: "사원",
    position2: "웹 퍼블리싱",
    period: "2022.10.4 ~ 2024.06.19",
    skill: ["HTML", "CSS", "JavaScript", "jQuery"],
    description:
      "정부기관, 무역 관련 웹사이트의 유지보수 및 접근성 퍼블리싱 작업을 수행했습니다.",
  },
  {
    company: "비포",
    position1: "사원",
    position2: "웹 퍼블리싱",
    period: "2022.04.06 ~ 2022.10.01",
    skill: ["HTML", "CSS", "JavaScript", "jQuery"],
    description:
      "랜딩페이지, 상세페이지 퍼블리싱 및 사내 사이트 유지보수를 담당했습니다.",
  },
  {
    company: "알통스포츠",
    position1: "사원(웹 디자인)",
    position2: "웹 디자인",
    period: "2020.07.30 ~ 2021.08.16",
    skill: ["HTML", "CSS", "JavaScript", "jQuery"],
    description:
      "이커머스 웹 디자인, 상세페이지 디자인 및 웹 퍼블리싱을 수행했습니다.",
  },
];
