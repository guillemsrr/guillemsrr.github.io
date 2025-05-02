'use client'

import Link from "next/link";

export function Navbar()
{
    const scrollToSection = (e, sectionId) =>
    {
        e.preventDefault()
        const section = document.querySelector(sectionId)
        if (section)
        {
            window.scrollTo({
                top: section.offsetTop - 100,
                behavior: 'smooth'
            })
        }
    }

    return (
        <nav className="">
                <div className="flex flex-row items-stretch font-medium">
                    <Link
                        href="/projects"
                        className="flex items-center h-full p-4 general-anchor"
                    >
                        Projects
                    </Link>

                    <Link
                        href="/professional-experience"
                        className="flex items-center h-full px-4 p-4 general-anchor"
                    >
                        Professional Experience
                    </Link>

                    <Link
                        href="/about"
                        className="flex items-center h-full px-4 p-4 general-anchor"
                    >
                        About me
                    </Link>
                </div>
        </nav>
    )
}