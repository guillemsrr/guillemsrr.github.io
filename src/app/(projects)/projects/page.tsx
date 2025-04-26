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
            <h1 className="text-2xl font-semibold tracking-tighter">
                Projects
            </h1>
            <div className="prose prose-neutral dark:prose-invert">
                <div className="flex flex-col gap-8">
                    <Projects/>
                </div>
            </div>
        </section>
    )
}