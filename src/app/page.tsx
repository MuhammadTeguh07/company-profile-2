import React from 'react';
import About from "@/components/about";
import Experiences from "@/components/experiences/experiences";
import Header from "@/components/header";
import Projects from '@/components/projects/projects';
import Credits from '@/components/credits';

export default function Layout() {
  const data = {
    "general": {
      "name": "Muhammad Teguh",
      "title": "Front End Developer",
      "headline": "A front end developer who wants to continue to develop and likes making creative designs",
      "about": [
        "I am a Front End Developer with over 3 years of experience in web development, combining technical expertise in <span style='color: white;'>React JS, Laravel, and CodeIgniter frameworks</span>, along with a strong understanding of JavaScript and PHP. In addition to writing code, I create captivating interactive works with beautiful designs, delivering responsive and engaging user experiences.",
        "I am always ready to take on challenges and quickly learn new technologies. I am passionate about continuously expanding my knowledge and skills in the tech field."
      ],
      "socials": {
        "whatsapp": "6283847070417",
        "instagram": "mteguh07",
        "email": "muhammadteguh301@gmail.com",
        "github": "https://github.com/"
      }
    },
    "experiences": [
      {
        "title": "Front End Developer",
        "company": "Looyal Indonesia",
        "href": "",
        "startDate": "03/2022",
        "endDate": "PRESENT",
        "description": "I work as a Frontend Developer using the CodeIgniter, Laravel, and Nextjs frameworks. My work involves creating interfaces that are responsive and easy to use. As well as ensuring all functions running properly.",
        "logo": "/logos/vercel-white.png",
        "skills": ["Next Js", "React Js", "TypeScript", "Laravel", "Codeigniter", "Javascript", "Tailwind CSS", "Bootstrap", "JQuery"]
      },
      {
        "title": "Front End Developer",
        "company": "Emol Indonesia",
        "href": "",
        "startDate": "08/2024",
        "endDate": "08/2024",
        "description": "I had the opportunity to work on a project for Emol Indonesia to enhance their marketplace website's design, making it more user-friendly and responsive. In this project, I used the Laravel framework to build a modern and visually appealing interface.",
        "logo": "/logos/vercel-white.png",
        "skills": ["Laravel", "Bootstrap", "Javascript", "JQuery"]
      },
      {
        "title": "Front End Developer",
        "company": "Freelance",
        "href": "",
        "startDate": "04/2023",
        "endDate": "05/2023",
        "description": "I collaborate with Backend Developers to develop electronic-based public service systems. The aim of building this system is to facilitate public access and improve government governance to make it more efficient and effective.",
        "logo": "/logos/vercel-white.png",
        "skills": ["Laravel", "Bootstrap", "Javascript", "JQuery"]
      },
      {
        "title": "Fullstack Developer",
        "company": "Freelance",
        "href": "",
        "startDate": "06/2022",
        "endDate": "06/2022",
        "description": "I created a dynamic company profile website for a food business, with the aim of increasing public awareness of the business. This website was developed using the Laravel Framework and MySQL Database.",
        "logo": "/logos/vercel-white.png",
        "skills": ["Laravel", "PHP", "Bootstrap", "Javascript", "JQuery", "MySQL"]
      },
      {
        "title": "Backend Developer",
        "company": "Freelance",
        "href": "",
        "startDate": "11/2021",
        "endDate": "12/2021",
        "description": "I developed a POS system for an optical sales business with the aim of increasing work efficiency and generating the necessary reports. This system was built using the Laravel Framework and MySQL Database.",
        "logo": "/logos/vercel-white.png",
        "skills": ["Laravel", "PHP", "MySQL"]
      },
      {
        "title": "Fullstack Developer",
        "company": "YDSF",
        "href": "",
        "startDate": "12/2021",
        "endDate": "01/2022",
        "description": "The YDSF Institute website that I developed facilitates social activities such as donations, sacrifices and zakat for the community. Using Laravel Framework and MySQL Database.",
        "logo": "/logos/vercel-white.png",
        "skills": ["Laravel", "PHP", "Bootstrap", "Javascript", "JQuery", "MySQL"]
      },
      {
        "title": "Fullstack Developer",
        "company": "PT PAL Indonesia",
        "href": "",
        "startDate": "12/2021",
        "endDate": "01/2022",
        "description": "During a 3-month internship, my team and I developed an office supplies procurement and asset management system to streamline the management of the company's operational needs. In this project, I used the Laravel framework to build a responsive and user-friendly interface and MySQL as the database.",
        "logo": "/logos/vercel-white.png",
        "skills": ["Laravel", "PHP", "Bootstrap", "Javascript", "JQuery", "MySQL"]
      },
    ],
    "education": [
      {
        "subject": "University Subject",
        "degree": "Master of Science",
        "university": "University Name",
        "href": "",
        "startDate": "2022",
        "endDate": "NOW",
        "description": "Short description of your degree."
      },
      {
        "subject": "University Subject",
        "degree": "Bachelor of Science",
        "university": "University Name",
        "href": "",
        "startDate": "2017",
        "endDate": "2020",
        "description": "Short description of your degree."
      }
    ],
    "volunteering": [
      {
        "position": "Position Name",
        "event": "Event Name",
        "organisation": "Organisation Name",
        "href": "",
        "startDate": "2022",
        "endDate": "NOW",
        "description": "Short description of your role at the event."
      },
      {
        "position": "Position Name",
        "event": "Event Name",
        "organisation": "Organisation Name",
        "href": "",
        "startDate": "2022",
        "endDate": "NOW",
        "description": "Short description of your role at the event."
      },
      {
        "position": "Position Name",
        "event": "Event Name",
        "organisation": "Organisation Name",
        "href": "",
        "startDate": "2022",
        "endDate": "NOW",
        "description": "Short description of your role at the event."
      }
    ],
    "projects": [
      {
        "name": "Customer Relationship Management",
        "language": ["React.js", "TypeScript", "HTML", "CSS", "Bootstrap"],
        "description": "A simple two-column portfolio template that is easy and quick to customize for your own purposes. Mobile friendly.",
        "href": "#",
        "image": "/projects/wooblazz-crm.png"
      },
      {
        "name": "Marketplace",
        "language": ["HTML", "CSS", "Bootstrap"],
        "description": "A simple two-column portfolio template that is easy and quick to customize for your own purposes. Mobile friendly.",
        "href": "#",
        "image": "/projects/marketplace-emol.png"
      },
      {
        "name": "Backoffice",
        "language": ["Laravel", "PHP", "HTML", "CSS", "Javascript", "JQuery", "Bootstrap", "MySQL"],
        "description": "A simple two-column portfolio template that is easy and quick to customize for your own purposes. Mobile friendly.",
        "href": "#",
        "image": "/projects/boarding-room-management.png"
      },
      {
        "name": "Broadcasting",
        "language": ["Laravel", "PHP", "HTML", "CSS", "Javascript", "JQuery", "Bootstrap"],
        "description": "A simple two-column portfolio template that is easy and quick to customize for your own purposes. Mobile friendly.",
        "href": "#",
        "image": "/projects/wooblazz-ads.png"
      },
      {
        "name": "Management Laundry",
        "language": ["Next.js", "TypeScript", "Tailwind", "HTML", "CSS"],
        "description": "A simple two-column portfolio template that is easy and quick to customize for your own purposes. Mobile friendly.",
        "href": "#",
        "image": "/projects/dashboard-ion.png"
      },
      {
        "name": "Online Order",
        "language": ["Codeigniter", "HTML", "CSS", "Javascript", "JQuery", "Bootstrap"],
        "description": "A simple two-column portfolio template that is easy and quick to customize for your own purposes. Mobile friendly.",
        "href": "#",
        "image": "/projects/online-order.png"
      },
      {
        "name": "Point Of Sale",
        "language": ["React.js", "Bootstrap", "HTML", "CSS"],
        "description": "A simple two-column portfolio template that is easy and quick to customize for your own purposes. Mobile friendly.",
        "href": "#",
        "image": "/projects/pos.png"
      },
      {
        "name": "Backoffice",
        "language": ["Laravel", "PHP", "HTML", "CSS", "Javascript", "JQuery", "Bootstrap", "MySQL"],
        "description": "A simple two-column portfolio template that is easy and quick to customize for your own purposes. Mobile friendly.",
        "href": "#",
        "image": "/projects/SPBE.png"
      },
      {
        "name": "Management Stock Opname",
        "language": ["Next.js", "TypeScript", "Tailwind", "HTML", "CSS"],
        "description": "A simple two-column portfolio template that is easy and quick to customize for your own purposes. Mobile friendly.",
        "href": "#",
        "image": "/projects/stock-opname-jvape.png"
      },
      {
        "name": "Management Account",
        "language": ["Next.js", "TypeScript", "Tailwind", "HTML", "CSS"],
        "description": "A simple two-column portfolio template that is easy and quick to customize for your own purposes. Mobile friendly.",
        "href": "#",
        "image": "/projects/wooblazz-account.png"
      },
      {
        "name": "Dynamic Form",
        "language": ["Codeigniter", "HTML", "CSS", "Javascript", "JQuery", "Bootstrap"],
        "description": "A simple two-column portfolio template that is easy and quick to customize for your own purposes. Mobile friendly.",
        "href": "#",
        "image": "/projects/wooblazz-form.png"
      },
      {
        "name": "Backoffice",
        "language": ["Codeigniter", "HTML", "CSS", "Javascript", "JQuery", "Bootstrap"],
        "description": "A simple two-column portfolio template that is easy and quick to customize for your own purposes. Mobile friendly.",
        "href": "#",
        "image": "/projects/woogigs-backoffice.png"
      },
      {
        "name": "Management Asset",
        "language": ["Laravel", "PHP", "HTML", "CSS", "Javascript", "JQuery", "Bootstrap", "MySQL"],
        "description": "A simple two-column portfolio template that is easy and quick to customize for your own purposes. Mobile friendly.",
        "href": "#",
        "image": "/projects/management-asset.png"
      },
      {
        "name": "Management ATK",
        "language": ["Laravel", "PHP", "HTML", "CSS", "Javascript", "JQuery", "Bootstrap", "MySQL"],
        "description": "A simple two-column portfolio template that is easy and quick to customize for your own purposes. Mobile friendly.",
        "href": "#",
        "image": "/projects/management-atk.png"
      },
      {
        "name": "Dashboard Monitoring",
        "language": ["HTML", "CSS", "Bootstrap"],
        "description": "A simple two-column portfolio template that is easy and quick to customize for your own purposes. Mobile friendly.",
        "href": "#",
        "image": "/projects/monitoring-system.png"
      },
    ]
  }

  return (
    <section className="flex min-h-screen flex-col items-center px-6 lg:px-24">
      <div className="z-2 w-full max-w-7xl font-mono text-sm flex flex-col lg:flex-row justify-between">
        <Header data={data.general} />
        <div className='lg:pl-[50%]'>
          <About data={data.general} />
          <Experiences data={data.experiences} />
          <Projects data={data.projects} />
          <Credits data={data.general} />
        </div>
      </div>
    </section>
  )
}
