import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Service from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {
  // const blogs = await getData();
  const services = [
    {
      title: "Front-end Development",
      description: "We specialize in creating responsive and interactive web applications using React.js, Angular, Material UI, Tailwind CSS, Bootstrap, and Redux. We focus on user-friendly interfaces and seamless user experiences.",
      skills: ["React.js", "Angular", "Material UI", "Tailwind CSS", "Bootstrap", "Responsive Design", "Redux"]
    },
    {
      title: "Full-stack Development",
      description: "Our full-stack development covers both front-end and back-end technologies. We use Node.js for the back-end with Express for server-side logic, and integrate with front-end frameworks like React or Angular.",
      skills: ["Node.js", "Express", "React.js", "Angular", "Full-stack"]
    },
    {
      title: "Other Technologies",
      description: "We work with a variety of technologies including MySQL, Python, and deployment strategies to ensure the best performance and scalability for your application.",
      skills: ["MySQL", "Python", "Deployment", "APIs", "Backend"]
    }
  ];


  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Service blogs={services} />
      <ContactSection />
     
    </div>
  )
};