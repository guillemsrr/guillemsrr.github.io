import 'src/global.css'
import type {Metadata} from 'next'
import {Navbar} from '@components/nav'
import Footer from '@components/footer'
import {Header} from "@app/(header)/header";
import {montserrat} from '@app/fonts'

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
})
{
    return (
        <html
            lang="en"
            className={cx(
                'text-black bg-white dark:text-white dark:bg-black',
                montserrat.variable
            )}
        >
        <head>
            <link rel="icon" href="/favicon.ico"/>
            <title>Guillem Serra | Portfolio</title>
        </head>
        <body className="max-w-4xl mx-auto font-sans">
            <main className="mt-8 flex flex-col w-full">
                <Header/>
                <Navbar/>
                <div className={'bg-neutral-50 dark:bg-neutral-800'}>
                    <div className="mx-8 my-8">
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
    description: 'This is my portfolio.',
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'My Portfolio',
        description: 'This is my portfolio.',
        siteName: 'My Portfolio',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}