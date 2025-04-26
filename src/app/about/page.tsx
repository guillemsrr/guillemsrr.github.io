import type {Metadata} from 'next'
import About from './about'

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Featured projects and work',
}

export default function AboutPage()
{
    return (
        <About/>
    )
}