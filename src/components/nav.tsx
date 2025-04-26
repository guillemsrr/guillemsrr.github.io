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
        <div className={'bg-neutral-60 dark:bg-neutral-900'}>
            <nav>
                <div className="flex">
                    <div className="flex flex-row">
                        {/*<Link
                            href="/projects"
                            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-4 m-1 font-medium capitalize"
                        >
                            Projects
                        </Link>*/}

                        <Link
                            href="/professional-experience"
                            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-4 m-1 font-medium capitalize"
                        >
                            Professional Experience
                        </Link>
                        <Link
                            href="/about"
                            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-4 m-1 font-medium capitalize"
                        >
                            About
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}