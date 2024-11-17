// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/react.png";
import sketch from "./assets/images/Skills/iot.jpg";
import ps from "./assets/images/Skills/mysql.png";
import reactjs from "./assets/images/Skills/webflow.png";
import nodejs from "./assets/images/Skills/draw.png";
import python from "./assets/images/Skills/supabase.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import img1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import project4 from "./assets/images/Projects/img4.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";
import CV from "./assets/images/CV/Ontiveros_Jann_Louis_CV.png"; // Adjust the path to where your CV image is stored

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Aspiring IT Project Manager",
    firstName: "JANN",
    LastName: "LOUIS",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2nd runner up",
        text: "KMC  Hackhathon Talent Matchmaking Challenge",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: "Full-Stack Development",
        logo: figma,
      },
      {
        name: "Draw io",
        para: "Project Management",
        logo: nodejs,
      },
      {
        name: "mysql",
        para: "Data Management",
        logo: ps,
      },
      {
        name: "webflow",
        para: "Website Design",
        logo: reactjs,
      },
      {
        name: "IOT",
        para: "IoT (Internet of Things)",
        logo: sketch,
      },
      {
        name: "supabase",
        para: "Full-Stack Development",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I CAN OFFER",
    service_content: [
      {
        title: "End-to-End Web Application Development",
        para: "Build and manage web applications from ideation to deployment using your Fullstack Development skills and tools like React, MySQL, HTML, CSS, and JavaScript.",
        logo: services_logo1,
      },
      {
        title: "Technical Project Management and Workflow Automation",
        para: "Provide project management services tailored to tech projects, using tools like flowchart creation and Webflow for streamlining workflows.",
        logo: services_logo2,
      },
      {
        title: "IoT Solutions Design and Deployment",
        para: "Leverage IoT expertise to design, develop, and deploy connected systems that use C++ and integrate with web interfaces or cloud solutions.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "VolcanoWatch",
        image: img1,
        description: "A mobile application that will detect the whereabouts of every evacuee."
      },
      {
        title: "Resume Builder",
        image: project2,
        description: "An interactive tool that helps users create professional resumes for KMC."
      },
      {
        title: "E-commerce",
        image: project3,
        description: "An e-commerce platform with a user-friendly interface, shopping cart, and secure payment gateway integration."
      },
      {
        title: "LMS",
        image: project4,
        description: "The platform enables educators to upload engaging history courses, track student progress, and facilitate a more immersive learning experience with 3D content, enhancing students' understanding of historical events and concepts."
      },
    ],
  },
  Testimonials: {
    title: "Experience",
    subtitle: "Competitive Student",
    testimonials_content: [
      {
        review:
          "“Manage my team to secure a spot in this competition”",
        img: avatar1,
        name: "KMC 2024 Talent Matchmaking Challenge held last 24-25 October 2024",
      },
      {
        review:
          "“Got recognized as one of the active student in my department”",
        img: avatar2,
        name: "College Life",
      },
      {
        review:
          "“Compete in Hack4Gov3 Regional Qualifying Round and secure top 8 spot out of 16”",
        img: avatar3,
        name: "HACKFORGOV Regional Qualifying Round held last June 6, 2024",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "As an Intern",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Fuel your team's innovation with my fresh perspective, eager spirit, and ready-to-learn attitude – the intern who's ready to make an impact from day one",
    btnText: "C.V",
    cvFile: CV, // Add this line
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "louis.ontiveros20@gmail.com",
        icon: GrMail,
        link: "mailto:louis.ontiveros20@gmail.com",
      },
      {
        text: "+63 945 720 3159",
        icon: MdCall,
      },
      {
        text: "ontiverosjannlouis",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/ontiverosjannlouis/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
