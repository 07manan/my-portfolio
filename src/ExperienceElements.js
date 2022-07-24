let ExperienceElements = [
  {
    id: 1,
    title: "B.Tech (ECE)",
    location: (
      <a href="http://www.iiitsurat.ac.in/" target="_blank" rel="noreferrer">
        Indian Institute of Information Technology(IIIT)-Surat, Gujarat
      </a>
    ),
    description: "B. Tech. degree in Electronics and Communication Engineering",
    duration: "Dec 2020 - present",
    icon: "school",
  },
  {
    id: 2,
    title: "ReactJS Internship",
    location: (
      <a href="https://www.dicot.tech/" target="_blank" rel="noreferrer">
        Dicot Inovations Pvt. Ltd.,Ahmedabad, Gujarat
      </a>
    ),
    description:
      "During the Internship, I developed ReactJS components for one of their product,Vision Web, which is an all-in-one IoT dashboard.",
    duration: "May 2022 - July 2022",
    icon: "work",
  },
];

export default ExperienceElements.reverse();
