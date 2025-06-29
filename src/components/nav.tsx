'use client'

import Link from "next/link";

export function Navbar()
{
    return (
        <nav className="w-full">
            <div className="flex flex-row items-center justify-center md:justify-start gap-2 md:gap-4">
                <Link
                    href="/projects"
                    className="flex justify-center items-center text-center px-4 py-2 md:px-6 md:py-3 general-anchor"
                >
                    Projects
                </Link>

                <Link
                    href="/professional-experience"
                    className="flex justify-center items-center text-center px-4 py-2 md:px-6 md:py-3 general-anchor"
                >
                    Professional Experience
                </Link>

                <Link
                    href="/about"
                    className="flex justify-center items-center text-center px-4 py-2 md:px-6 md:py-3 general-anchor"
                >
                    About me
                </Link>
            </div>
        </nav>
    );
}