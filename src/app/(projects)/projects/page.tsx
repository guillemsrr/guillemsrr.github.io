import type {Metadata} from 'next'
import Projects from "@app/(projects)/projects/projects";

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Featured projects',
}

export default function ProjectsPage()
{
    return (
        <section>
            <h2 className="font-bold text-3xl mb-8 tracking-tighter">
                Projects
            </h2>
            <Projects/>
        </section>
    )
}