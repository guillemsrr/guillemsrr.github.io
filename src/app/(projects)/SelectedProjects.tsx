import {loadProject, Project, ProjectCard} from "@app/(projects)/projectsData";

export async function getSelectedProjects(projectNames: string[]): Promise<Project[]>
{
    const projects = await Promise.all(
        projectNames.map((slug) => loadProject(slug))
    );

    return projects
        .filter((p): p is Project => p !== null)
        .sort((a, b) =>
        {
            if (!a.publishedAt) return 1;
            if (!b.publishedAt) return -1;
            return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        });
}

const selectedSlugs = ['soliloquy', 'archer', 'a-void', 'concrete', 'wfc', 'tarkovsky'];

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