import {CustomMDX, loadProjectMdx} from '@components/mdx'
import {notFound} from 'next/navigation'
import {getProjects} from "@app/(projects)/projects/projects";

export default async function Project({params}: { params: Promise<{ project: string }> })
{
    const {project: slug} = await params;
    const projects = await getProjects();
    const meta = projects.find((p) => p.slug === slug);

    if (!meta) notFound();

    const {content, frontmatter} = await loadProjectMdx(slug);

    return (
        <section>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.summary}</p>
            <CustomMDX source={content}/>
        </section>
    );
}

export async function generateMetadata({params}: { params: Promise<{ project: string }> })
{
    const {project: slug} = await params;
    const projects = await getProjects();
    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};

    return {
        title: project.title,
        description: project.description,
    };
}

export async function generateStaticParams()
{
    const projects = await getProjects();

    return projects.map((project) => ({
        project: project.slug,
    }));
}