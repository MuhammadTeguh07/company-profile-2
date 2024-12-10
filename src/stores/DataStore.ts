import { create } from 'zustand';

export const useDataStore = create(() => ({
    general: {
        "name": "Muhammad Teguh",
        "title": ["Front End Developer", "Freelancer"],
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
    experience: [
        {
            "title": "Front End Developer",
            "company": "Looyal Indonesia",
            "href": "https://www.looyal.id",
            "startDate": "03/2022",
            "endDate": "PRESENT",
            "description": "I work as a Frontend Developer using the CodeIgniter, Laravel, and Nextjs frameworks. My work involves creating interfaces that are responsive and easy to use. As well as ensuring all functions running properly.",
            "skills": ["Next Js", "React Js", "TypeScript", "Laravel", "Codeigniter", "Javascript", "Tailwind CSS", "Bootstrap", "JQuery"]
        },
        {
            "title": "Front End Developer",
            "company": "Emol Indonesia",
            "href": "https://uat.emol.co.id/",
            "startDate": "08/2024",
            "endDate": "08/2024",
            "description": "I had the opportunity to work on a project for Emol Indonesia to enhance their marketplace website's design, making it more user-friendly and responsive. In this project, I used the Laravel framework to build a modern and visually appealing interface.",
            "skills": ["Laravel", "Bootstrap", "Javascript", "JQuery"]
        },
        {
            "title": "Front End Developer",
            "company": "Freelance",
            "href": "",
            "startDate": "04/2023",
            "endDate": "05/2023",
            "description": "I collaborate with Backend Developers to develop electronic-based public service systems. The aim of building this system is to facilitate public access and improve government governance to make it more efficient and effective.",
            "skills": ["Laravel", "Bootstrap", "Javascript", "JQuery"]
        },
        {
            "title": "Fullstack Developer",
            "company": "Freelance",
            "href": "",
            "startDate": "06/2022",
            "endDate": "06/2022",
            "description": "I created a dynamic company profile website for a food business, with the aim of increasing public awareness of the business. This website was developed using the Laravel Framework and MySQL Database.",
            "skills": ["Laravel", "PHP", "Bootstrap", "Javascript", "JQuery", "MySQL"]
        },
        {
            "title": "Backend Developer",
            "company": "Freelance",
            "href": "",
            "startDate": "11/2021",
            "endDate": "12/2021",
            "description": "I developed a POS system for an optical sales business with the aim of increasing work efficiency and generating the necessary reports. This system was built using the Laravel Framework and MySQL Database.",
            "skills": ["Laravel", "PHP", "MySQL"]
        },
        {
            "title": "Fullstack Developer",
            "company": "YDSF",
            "href": "https://ydsf.org",
            "startDate": "12/2021",
            "endDate": "01/2022",
            "description": "The YDSF Institute website that I developed facilitates social activities such as donations, sacrifices and zakat for the community. Using Laravel Framework and MySQL Database.",
            "skills": ["Laravel", "PHP", "Bootstrap", "Javascript", "JQuery", "MySQL"]
        },
        {
            "title": "Fullstack Developer",
            "company": "PT PAL Indonesia",
            "href": "https://www.pal.co.id",
            "startDate": "12/2021",
            "endDate": "01/2022",
            "description": "During a 3-month internship, my team and I developed an office supplies procurement and asset management system to streamline the management of the company's operational needs. In this project, I used the Laravel framework to build a responsive and user-friendly interface and MySQL as the database.",
            "skills": ["Laravel", "PHP", "Bootstrap", "Javascript", "JQuery", "MySQL"]
        },
    ],
    project: [
        {
            "name": "Customer Relationship Management",
            "language": ["React.js", "TypeScript", "HTML", "CSS", "Bootstrap"],
            "description": "A platform designed to help users monitor team performance and gain deeper insights into their target market. It empowers users to be more productive with a single dashboard integrated with various modules.",
            "href": "https://crm.wooblazz.com",
            "image": ["/projects/wooblazz-crm.png", "/projects/wooblazz-crm.png"]
        },
        {
            "name": "Management Account",
            "language": ["Next.js", "TypeScript", "Tailwind", "HTML", "CSS"],
            "description": "Enables users to access, manage, and synchronize services and products from Wooblazz.",
            "href": "",
            "image": ["/projects/wooblazz-account.png"]
        },
        {
            "name": "Broadcasting",
            "language": ["Laravel", "PHP", "HTML", "CSS", "Javascript", "JQuery", "Bootstrap"],
            "description": "A web-based platform that enables users to automatically send mass messages to multiple contacts simultaneously via WhatsApp. This platform is designed to support businesses in communicating effectively with their customers, prospects, or audience through personalized and structured messages.",
            "href": "https://dashboard.wooblazz.com/",
            "image": ["/projects/wooblazz-ads.png"]
        },
        {
            "name": "Management Laundry",
            "language": ["Next.js", "TypeScript", "Tailwind", "HTML", "CSS"],
            "description": "Designed to help laundry business owners efficiently manage daily operations and enhance productivity, this platform integrates various features to streamline the management of orders, customers, employees, and laundry status tracking, all within a centralized system.",
            "href": "https://ion.looyal.id/",
            "image": ["/projects/dashboard-ion.png"]
        },
        {
            "name": "Dynamic Form",
            "language": ["Codeigniter", "HTML", "CSS", "Javascript", "JQuery", "Bootstrap"],
            "description": "This platform is designed to simplify the creation of forms that can automatically adapt, either based on user input or existing data, to enhance the efficiency of information collection.",
            "href": "https://form.looyal.id/adce5b",
            "image": ["/projects/wooblazz-form.png"]
        },
        {
            "name": "Online Order",
            "language": ["Codeigniter", "HTML", "CSS", "Javascript", "JQuery", "Bootstrap"],
            "description": "This platform enables customers to place orders easily and quickly, while helping businesses manage orders efficiently through an integrated system.",
            "href": "https://www.looyal.id/restaurant88",
            "image": ["/projects/online-order.png"]
        },
        {
            "name": "Point Of Sale",
            "language": ["React.js", "Bootstrap", "HTML", "CSS"],
            "description": "The POS platform helps businesses enhance operational efficiency, speed up transaction processes, and deliver a better customer experience with modern and integrated services.",
            "href": "https://pos.looyal.id",
            "image": ["/projects/pos.png"]
        },
        {
            "name": "Backoffice",
            "language": ["Codeigniter", "HTML", "CSS", "Javascript", "JQuery", "Bootstrap"],
            "description": "Designed to support business operations behind the scenes of the Point of Sale (POS) system, this platform provides full control to business owners or managers in managing various operational aspects, from inventory, customer data, product settings, to financial reporting, all within a single integrated dashboard.",
            "href": "https://backoffice.woogigs.com",
            "image": ["/projects/woogigs-backoffice.png"]
        },
        {
            "name": "Backoffice",
            "language": ["Laravel", "PHP", "HTML", "CSS", "Javascript", "JQuery", "Bootstrap", "MySQL"],
            "description": "A system designed to facilitate public access and improve government governance to make it more efficient and effective.",
            "href": "",
            "image": ["/projects/SPBE.png"]
        },
        {
            "name": "Management Stock Opname",
            "language": ["Next.js", "TypeScript", "Tailwind", "HTML", "CSS"],
            "description": "This platform enables business owners or managers to monitor stock availability in real-time, compare physical stock with system data, and identify discrepancies or inconsistencies in the inventory.",
            "href": "https://office.jgroupindonesia.com",
            "image": ["/projects/stock-opname-jvape.png"]
        },
        {
            "name": "Marketplace",
            "language": ["HTML", "CSS", "Bootstrap"],
            "description": "Enhancing the marketplace website's interface design to ensure a more intuitive and responsive user experience across all devices.",
            "href": "https://uat.emol.co.id",
            "image": ["/projects/marketplace-emol.png"]
        },
        {
            "name": "Management Asset",
            "language": ["Laravel", "PHP", "HTML", "CSS", "Javascript", "JQuery", "Bootstrap", "MySQL"],
            "description": "This platform provides users with the ease of tracking, maintaining, and managing assets efficiently, helping to optimize asset utilization and reduce the risk of loss or damage.",
            "href": "",
            "image": ["/projects/management-asset.png"]
        },
        {
            "name": "Management ATK",
            "language": ["Laravel", "PHP", "HTML", "CSS", "Javascript", "JQuery", "Bootstrap", "MySQL"],
            "description": "With this platform, users can manage inventory, place orders, and track the usage of office supplies more efficiently, reducing waste and ensuring the availability of necessary items.",
            "href": "",
            "image": ["/projects/management-atk.png"]
        },
        {
            "name": "Dashboard Monitoring",
            "language": ["HTML", "CSS", "Bootstrap"],
            "description": "Designing a website dashboard to display COVID-19 related data within the company.",
            "href": "",
            "image": ["/projects/monitoring-system.png"]
        },
        {
            "name": "Backoffice",
            "language": ["Laravel", "PHP", "HTML", "CSS", "Javascript", "JQuery", "Bootstrap", "MySQL"],
            "description": "A system designed to help owners or managers of boarding house businesses efficiently manage all aspects of the room operations in a more organized manner.",
            "href": "",
            "image": ["/projects/boarding-room-management.png"]
        },
    ],
}));
