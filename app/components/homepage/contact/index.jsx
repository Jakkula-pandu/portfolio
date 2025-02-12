import Link from 'next/link';
import { IoMail, IoCall, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

function ContactSection() {
  const contacts = [
    { icon: <IoMail />, name: "Email", link: "mailto:jakkulapandu967@gmail.com" },
    { icon: <IoCall />, name: "Phone", link: "tel:+917285914315" },
    { icon: <IoLogoLinkedin />, name: "LinkedIn", link: "https://www.linkedin.com/in/pandu-jakkula-developer/" },
    { icon: <IoLogoGithub />, name: "GitHub", link: "https://github.com/Jakkula-pandu" },
  ];

  return (
    <div className="relative bg-[#0d1224] text-white py-12 px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] mx-auto">
      <p className="font-semibold mb-6 text-[#16f2b3] text-xl uppercase text-center">Contact Me</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {contacts.map((contact, index) => (
          <Link 
            key={index} 
            href={contact.link} 
            target="_blank"
            className="flex items-center gap-4 p-6 border border-[#353951] rounded-xl bg-[#161b33] hover:bg-[#1e2342] transition-all shadow-lg"
          >
            <div className="text-3xl text-[#16f2b3]">{contact.icon}</div>
            <span className="text-lg font-medium">{contact.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ContactSection;
