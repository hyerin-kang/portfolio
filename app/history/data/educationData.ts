interface EducationDataType {
  logo: string;
  school: string;
  fieldOfStudy1: string;
  fieldOfStudy2?: string;
  startDate: string;
  endDate: string;
}
export const educationData: EducationDataType[] = [
  {
    logo: "/images/logo-school-01.svg",
    school: "경성대학교",
    fieldOfStudy1: "미술학과",
    fieldOfStudy2: "시각디자인학과",
    startDate: "2014.03",
    endDate: "2019.02",
  },
  {
    logo: "/images/logo-school-02.jpg",
    school: "한국조형예술고등학교",
    fieldOfStudy1: "그래픽디자인과",
    startDate: "2011.03",
    endDate: "2014.02",
  },
];
