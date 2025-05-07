import 'src/global.css'
import type {Metadata} from 'next'
import {montserrat} from '@app/fonts'
import React, {ReactNode} from "react";
import Providers from "@components/providers";
import {Header} from "@app/(header)/header";
import {Navbar} from "@components/nav";
import Footer from "@components/footer";

export default function RootLayout({children}: { children: React.ReactNode })
{
    return (
        <html lang="en" className={montserrat.className} suppressHydrationWarning>
        <body className="text-black bg-white dark:text-white dark:bg-black mx-4 md:mx-8 lg:max-w-6xl lg:mx-auto">
            <Providers>
                <Structure>
                    {children}
                </Structure>
            </Providers>
        </body>
        </html>
    );
}

function Structure({children}: { children: ReactNode })
{
    return (
        <main className="mt-4 md:mt-4 flex flex-col">
            <Header/>
            <div className={'mt-1 md:mt-4 bg-neutral-200 dark:bg-neutral-900'}>
                <Navbar/>
            </div>
            <div className={'bg-neutral-100 dark:bg-neutral-800'}>
                <div className="mx-4 md:mx-8 my-4 md:my-8">
                    {children}
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export const metadata: Metadata = {
    title: {
        default: 'Guillem Serra | Portfolio',
        template: '%s | Guillem Serra',
    },
    description: "Guillem Serra's portfolio.",
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'Guillem Serra',
        description: "Guillem Serra's portfolio",
        siteName: "Guillem Serra's portfolio",
        locale: 'en_US',
        type: 'website',
    },
}