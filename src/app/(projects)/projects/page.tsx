import type {Metadata} from 'next'
import {getProjects, Project} from "@app/(projects)/projectsData";
import {Projects} from "@app/(projects)/projects/projects";

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Featured projects',
}

export default async function ProjectsPage()
{
    const projects: Project[] = await getProjects();

    return (
        <section>
            <h1 className="h1">
                Projects
            </h1>
            <Projects projects={projects}/>
        </section>
    )
}