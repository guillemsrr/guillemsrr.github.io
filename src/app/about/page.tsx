import type {Metadata} from 'next'
import About from './about'

export const metadata: Metadata = {
    title: 'About',
    description: 'Software developer and tech enthusiast',
}

export default function AboutPage()
{
    return (
        <About/>
    )
}