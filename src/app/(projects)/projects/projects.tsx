import Link from 'next/link'
import Image from 'next/image'
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
                    description: data.summary,
                    publishedAt: data.publishedAt,
                    image: data.image
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
        <div className="relative">
            <Link href={`/projects/${project.slug}`}
                  className="block p-4 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="relative h-48 mb-4">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            </Link>
        </div>
    );
}

export default async function Projects()
{
    const projects = await getProjects();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
            {projects.map((project) => (
                <ProjectCard key={project.slug} project={project}/>
            ))}
        </div>
    );
}