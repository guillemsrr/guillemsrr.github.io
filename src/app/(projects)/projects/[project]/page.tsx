﻿import {CustomMDX} from '@components/mdx'
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import {getProjects, Project, projectsDir} from "@app/(projects)/projectsData";
import {imageBaseUrl} from "@components/globals";
import {Tag} from "@components/tag";

async function loadProjectMdx(slug: string)
{
    const filePath = path.join(
        projectsDir,
        `${slug}.mdx`
    );

    if (!fs.existsSync(filePath))
    {
        throw new Error(`MDX file not found: ${filePath}`);
    }

    const rawSource = await fs.promises.readFile(filePath, 'utf8');
    const {data, content} = matter(rawSource);
    return {
        project: data as Project,
        content,
    };
}

export default async function ProjectPage({params}: { params: Promise<{ project: string }> })
{
    const {project: slug} = await params;
    const {content, project} = await loadProjectMdx(slug);

    return (
        <section>
            <h1 className="font-bold text-4xl">
                {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 mt-4">
                {project.tags?.split(',').map((tag, index) => (
                    <Tag key={index}>
                        {tag.trim()}
                    </Tag>
                ))}
            </div>
            <div className="mt-4 mb-4 relative h-48">
                <Image
                    src={imageBaseUrl + project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>
            {project.publishedAt && (
                <div className={"text-neutral-500 dark:text-neutral-400 my-4"}>
                    {new Date(project.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                    })}
                </div>
            )}
            <p>{project.description}</p>

            <div className="prose prose-neutral">
                <CustomMDX source={content}/>
            </div>
        </section>
    );
}

export async function generateMetadata({params}: { params: Promise<{ project: string }> })
{
    const {project: slug} = await params;

    const {project} = await loadProjectMdx(slug);
    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            url: `https://guillemsrr.github.io/projects/${project}/`,
            images: [
                {
                    url: project.image.startsWith('http')
                        ? project.image
                        : `https://guillemsrr.github.io${project.image}`,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
        },
    };
}

export async function generateStaticParams()
{
    const projects = await getProjects();

    return projects.map((project) => ({
        project: project.slug,
    }));
}