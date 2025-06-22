export interface CareersType {
  company: string;
  position1: string;
  position2: string;
  period: string;
  skill: string[];
  description: DescriptionItem[];
}
export interface DescriptionItem {
  text: string;
  links?: string[];
}

export const carreers: CareersType[] = [
  {
    company: "키즐링",
    position1: "인턴",
    position2: "프론트엔드 개발",
    period: "2025.06.04 ~ 2025.07.01",
    skill: ["React", "TypeScript", "Tailwind CSS"],
    description: [
      { text: "프론트엔드 웹 애플리케이션 UI 및 기능 개발" },
      { text: "RESTful API 연동 및 비동기 데이터 처리 구현" },
      { text: "Git을 활용한 형상 관리 및 팀 협업 경험" },
    ],
  },
  {
    company: "제스아이앤씨",
    position1: "사원",
    position2: "웹 퍼블리싱",
    period: "2022.10.4 ~ 2024.06.19",
    skill: ["HTML", "CSS", "JavaScript", "jQuery"],
    description: [
      { text: "HTML, CSS, jQuery를 활용한 반응형 웹 퍼블리싱" },
      { text: "Git을 활용한 형상 관리 및 팀 협업 경험" },
      {
        text: "프로젝트 파견 : 질병관리청 (2023.05 ~ 2024.02) | 통합서비스(신규) 감염병포털 | Q-CODE | 서브 및 공통 퍼블리싱 | 웹접근성 | 웹호환성",
        links: [
          "https://dportal.kdca.go.kr/pot/index.do",
          "https://qcode.kdca.go.kr/qco/index.do",
        ],
      },
      {
        text: "프로젝트 파견 : 코트라 무역투자24 (2024.02 ~ 2024.05) | 오픈 전 수정 및 유지보수",
        links: ["https://www.kotra.or.kr/index.do"],
      },
    ],
  },
  {
    company: "비포",
    position1: "사원",
    position2: "웹 퍼블리싱",
    period: "2022.04.06 ~ 2022.10.01",
    skill: ["HTML", "CSS", "JavaScript", "jQuery"],
    description: [
      { text: "HTML, CSS, jQuery를 활용한 반응형 웹 퍼블리싱, 유지보수" },
    ],
  },
  {
    company: "알통스포츠",
    position1: "사원",
    position2: "웹 디자인",
    period: "2020.07.30 ~ 2021.08.16",
    skill: ["Photoshop", "Illustrator"],
    description: [
      { text: "상품업데이트, 홈페이지 관리" },
      { text: "이벤트 배너, 각종 홍보물 작업, 상세페이지 제작" },
    ],
  },
];
