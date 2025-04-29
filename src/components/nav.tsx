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
        <nav className={"md:mx-4"}>
            <div className="flex">
                <div
                    className="flex flex-row transition-all  font-medium">
                    <Link
                        href="/projects"
                        className="flex align-middle relative py-1 px-4 m-1"
                    >
                        Projects
                    </Link>

                    <Link
                        href="/professional-experience"
                        className="flex align-middle relative py-1 px-4 m-1"
                    >
                        Professional Experience
                    </Link>
                    <Link
                        href="/about"
                        className="flex align-middle relative py-1 px-4 m-1"
                    >
                        About me
                    </Link>
                </div>
            </div>
        </nav>
    )
}