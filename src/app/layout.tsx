import 'src/global.css'
import type {Metadata} from 'next'
import {Navbar} from '@components/nav'
import Footer from '@components/footer'
import {Header} from "@app/(header)/header";
import {montserrat} from '@app/fonts'
import React from "react";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
})
{
    return (
        <html
            lang="en"
            className={`text-black bg-white dark:text-white dark:bg-black ${montserrat.className}`}
        >
        <body className="mx-4 md:mx-8 lg:max-w-6xl lg:mx-auto">
            <main className="mt-4 md:mt-8 flex flex-col">
                <Header/>
                <div className={'bg-neutral-60 dark:bg-neutral-900'}>
                    <Navbar/>
                </div>
                <div className={'bg-neutral-50 dark:bg-neutral-800'}>
                    <div className="mx-4 md:mx-8 my-4 md:my-8">
                        {children}
                    </div>
                </div>
                <Footer/>
            </main>
        </body>
        </html>
    )
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