'use client'; // This line tells Next.js that this is a Client Component

import React from "react";
import { FaGithub, FaInstagram, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";

const Socials = (props) => {
    const handleRedirectMail = () => {
        const email = props.data.email;
        const subject = "Hello Teguh";
        const body = "I would like to propose a collaboration.";

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <ul className="flex gap-2 mt-5">
            <li><a className="icon-footer hover:bg-surface-200" target="_blank" href="https://api.whatsapp.com/send/?phone=6283847070417"><FaWhatsapp fontSize={"1.5rem"} /></a></li>
            <li><a className="icon-footer hover:bg-surface-200" target="_blank" href={`https://www.instagram.com/${props.data.instagram}`}><FaInstagram fontSize={"1.5rem"} /></a></li>
            <li><a className="icon-footer hover:bg-surface-200" target="_blank" href="https://github.com/MuhammadTeguh07"><FaGithub fontSize={"1.5rem"} /></a></li>
            <li><a className="icon-footer hover:bg-surface-200" target="_blank" href="#" onClick={handleRedirectMail}><FaRegEnvelope fontSize={"1.5rem"} /></a></li>
        </ul>
    );
};

export default Socials;
