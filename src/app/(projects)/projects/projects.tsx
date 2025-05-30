﻿import fs from "fs";
import {loadProject, Project, ProjectCard, projectsDir} from "@app/(projects)/projectsData";

export async function getProjects(): Promise<Project[]>
{
    const files = await fs.promises.readdir(projectsDir);
    const slugs = files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => file.replace(/\.mdx$/, ''));

    const projects = await Promise.all(
        slugs.map((slug) => loadProject(slug))
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

export default async function Projects()
{
    const projects = await getProjects();

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