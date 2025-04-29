import Link from 'next/link'
import Image from 'next/image'
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import {Tag} from "@app/(professional-experience)/tag";

export interface Project
{
    slug: string;
    title: string;
    description: string;
    publishedAt?: string;
    image: string;
    tags?: string;  // Comma-separated string of tags
}

export async function getProjects(): Promise<Project[]>
{
    const projectsDir = path.join(process.cwd(), 'src', 'app', '(projects)'); // Adjust if needed
    const files = await fs.promises.readdir(projectsDir);

    const projects = await Promise.all(
        files
            .filter((file) => file.endsWith('.mdx'))
            .map(async (file) =>
            {
                const fullPath = path.join(projectsDir, file);
                const rawSource = await fs.promises.readFile(fullPath, 'utf8');
                const {data} = matter(rawSource);

                return {
                    slug: file.replace(/\.mdx$/, ''),
                    title: data.title,
                    description: data.description,
                    publishedAt: data.publishedAt,
                    image: data.image,
                    tags: data.tags
                };
            })
    );

    return projects.sort((a, b) =>
    {
        if (!a.publishedAt) return 1;
        if (!b.publishedAt) return -1;
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
}

function ProjectCard({project}: { project: Project })
{
    return (
        <div className="my-2">
            <Link
                href={`/projects/${project.slug}`}
                className="p-1 block hover:shadow-lg transition overflow-hidden rounded-md"
            >
                <div className="relative h-52">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="p-4 pb-6 bg-white dark:bg-neutral-900">
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{project.description}</p>

                    {project.tags && (
                        <div className="flex flex-wrap gap-2 mt-3">
                            {project.tags.split(',').map((tag, index) => (
                                <Tag key={index}>
                                    {tag.trim()}
                                </Tag>
                            ))}
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );
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