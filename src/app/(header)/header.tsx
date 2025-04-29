'use client'

import Link from 'next/link'
import ExternalLinks from "./external-links";
import ThemeToggle from "@components/theme-toggle";

export function Header()
{
    return (
        <header className="mb-8 flex items-start justify-between">
            <div className={"mx-4"}>
                <Link href="/" className="font-medium">
                    Guillem Serra | Portfolio
                </Link>
                <h1>
                    {"{"} video games developer {"}"}
                </h1>
            </div>
            <div className="flex flex-col items-end">
                <ExternalLinks/>
                <div className="mt-2">
                    <ThemeToggle/>
                </div>
            </div>
        </header>
    )
}