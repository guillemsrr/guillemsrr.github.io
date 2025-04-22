'use client'
import Link from 'next/link'

export function Header()
{
    return (
        <header className="mb-8 flex items-center justify-between">
            <div>

                <Link href="/" className="font-medium">
                    Guillem Serra
                </Link>
                <h1>
                    {"{"} Videogame developer {"}"}
                </h1>
            </div>
        </header>
    )
}