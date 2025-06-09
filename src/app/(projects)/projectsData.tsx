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
    isOpenSourced?: boolean;
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
            tags: data.tags,
            isOpenSourced: data.isOpenSourced
        };
    } catch (err)
    {
        console.warn(`Could not read project "${slug}":`, err);
        return null;
    }
}

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