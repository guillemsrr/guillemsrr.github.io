'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

export function Navbar()
{
    const pathname = usePathname();

    const links = [
        {href: '/professional-experience', label: 'Professional Experience'},
        {href: '/unreal-engine', label: 'Unreal Engine'},
        {href: '/unity', label: 'Unity'},
        {href: '/projects', label: 'All projects'},
        {href: '/about', label: 'About me'},
    ];

    return (
        <nav className="w-full">
            <div className={"flex flex-row flex-wrap items-center justify-center md:justify-start"}>
                {links.map(({href, label}) =>
                {
                    let isActive = pathname.includes(href);
                    if(isActive && pathname.includes("projects"))
                    {
                        isActive = pathname === '/projects/';
                    }

                    const baseClasses =
                        'flex justify-center items-center text-center px-4 py-2 md:px-6 md:py-3 transition';
                    const activeClasses = 'bg-neutral-500 text-neutral-100 dark:text-black font-semibold dark:bg-neutral-400';
                    const inactiveClasses = 'general-anchor';

                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
                        >
                            {label}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}