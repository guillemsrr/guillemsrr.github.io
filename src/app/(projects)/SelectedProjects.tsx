import {loadProject, Project, ProjectCard} from "@app/(projects)/projectsData";

export async function getSelectedProjects(projectNames: string[]): Promise<Project[]>
{
    const projects = await Promise.all(
        projectNames.map((slug) => loadProject(slug))
    );

    return projects
        .filter((p): p is Project => p !== null);
}

const selectedSlugs = ['vgscript', 'soliloquy', 'archer', 'a-void', 'generative-art', 'wfc'];

export default async function SelectedProjects()
{
    const projects = await getSelectedProjects(selectedSlugs);

    return (
        <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project}/>
                ))}
            </div>
        </div>
    );
}