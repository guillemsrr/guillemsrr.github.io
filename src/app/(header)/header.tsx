'use client'

import Link from 'next/link'
import ExternalLinks from "./external-links";
import ThemeToggle from "@components/theme-toggle";

export function Header()
{
    return (
        <header className="mb-8 flex items-start justify-between">
            <div className={"p-2"}>
                <Link href="/" className="p-2 font-bold rounded-lg general-anchor">
                    Guillem Serra | Portfolio
                </Link>
                <h1 className={"text-sm md:text-md px-2"}>
                    {"{"} video games developer {"}"}
                </h1>
            </div>
            <div className="flex flex-col items-end">
                <ExternalLinks/>
                <div className="">
                    <ThemeToggle/>
                </div>
            </div>
        </header>
    )
}