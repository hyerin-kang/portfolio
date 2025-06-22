export interface ProjectDataType {
  coverImg: string;
  title: string;
  summary: string;
  duration: string;
  stack: string[];
  github: string;
  live: string;
}
export const projectData: ProjectDataType[] = [
  {
    coverImg: "/images/project-05.png",
    title: "DON'T WORRY",
    summary: "나만의 걱정 고민을 들어주고 도와주는 AI 서비스",
    duration: "2025.03.31 - 2025.04.27",
    stack: ["Next.js", "TypeScript"],
    github: "https://github.com/PomegranateBlue/dont_worry",
    live: "https://dontworry.io.kr/",
  },
  {
    coverImg: "/images/project-06.png",
    title: "MAPMORY",
    summary: "여행계획을 지도에 표시하고 기억할 수 있는 온라인 플랫폼",
    duration: "2025.03.05 - 2025.03.12",
    stack: ["React"],
    github: "https://github.com/arendt9797/MapMory",
    live: "https://map-mory.vercel.app/",
  },
  {
    coverImg: "/images/project-01.png",
    title: "TODO APP",
    summary: "간단한 할 일 관리 앱",
    duration: "2025.05.12 - 2025.05.16",
    stack: ["Next.js", "TypeScript"],
    github: "https://github.com/hyerin-kang/todo-next",
    live: "https://todo-next-tau.vercel.app/",
  },
  {
    coverImg: "/images/project-02.png",
    title: "LOL APP",
    summary: "리그 오브 레전드 정보 앱",
    duration: "2024.03.07 - 2024.03.18",
    stack: ["Next.js", "TypeScript"],
    github: "https://github.com/hyerin-kang/lol-app",
    live: "https://lol-app-three.vercel.app/",
  },
  {
    coverImg: "/images/project-03.png",
    title: "POKEMON DEX",
    summary: "나만의 포켓몬도감! 포켓몬을 포확해보세요",
    duration: "2025.02.03 - 2025.02.10",
    stack: ["React"],
    github: "https://github.com/hyerin-kang/Pokemon-dex",
    live: "https://pokemon-dex-three.vercel.app/",
  },
  {
    coverImg: "/images/project-04.png",
    title: "RINFLIX",
    summary: "Vanilla JavaScript로 구현한 영화 검색 웹 애플리케이션",
    duration: "2025.01.08 - 2025.01.14",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/hyerin-kang/js-movie",
    live: "https://hyerin-kang.github.io/js-movie/",
  },
];
