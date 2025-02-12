// @flow strict

import { personalData } from "@/utils/data/personal-data";
import ServiceCard from "../components/homepage/blog/blog-card";

async function getBlogs() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  return data;
};

async function page() {
   
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
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Services
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
      {services.map((service, i) => (
          <ServiceCard service={service} key={i} />
        ))}
      </div>
    </div>
  );
};

export default page;