import Link from "next/link";
import Image from "next-export-optimize-images/image";
import {Tag} from "@app/(professional-experience)/tag";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

export interface Project
{
    slug: string;
    title: string;
    description: string;
    publishedAt?: string;
    image: string;
    tags?: string;
}

export const projectsDir = path.join(process.cwd(), 'src', 'app', '(projects)', 'markdown');

export async function loadProject(slug: string): Promise<Project | null>
{
    const filePath = path.join(projectsDir, `${slug}.mdx`);
    try
    {
        const rawSource = await fs.promises.readFile(filePath, 'utf8');
        const {data} = matter(rawSource);

        return {
            slug,
            title: data.title,
            description: data.description,
            publishedAt: data.publishedAt,
            image: data.image,
            tags: data.tags
        };
    } catch (err)
    {
        console.warn(`Could not read project "${slug}":`, err);
        return null;
    }
}


export function ProjectCard({project}: { project: Project })
{
    return (
        <div className="mb-1">
            <Link
                href={`/projects/${project.slug}`}
                className="p-1 block hover:shadow-lg transition overflow-hidden rounded-md general-anchor"
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
                    {project.publishedAt && (
                        <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                            {new Date(project.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long'
                            })}
                        </div>
                    )}
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