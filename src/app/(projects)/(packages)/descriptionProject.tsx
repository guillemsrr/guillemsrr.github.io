import {loadProject, Project} from "@app/(projects)/projectsData";
import {ProjectCard} from "@app/(projects)/projects/projectCard";
import {ReactNode} from "react";
import {notFound} from "next/navigation";

export async function DescriptionProject({
                                             projectSlug,
                                             children,
                                         }: {
    projectSlug: string;
    children: ReactNode;
})
{
    const project: Project | null = await loadProject(projectSlug);

    if (!project)
    {
        return notFound();
    }

    return (
        <div className="mb-8">
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-8 bg-neutral-200 dark:bg-neutral-700 p-2"}>
                <div className="flex items-center">
                    <div className="prose py-2 px-8">
                        <h2 className={"!mt-0"}>{project.title}</h2>
                        {children}
                        <p className={"strong font-semibold dark:font-normal !text-amber-700 dark:!text-amber-200"}>{project.isOpenSourced ? "{ Open source }" : ""}</p>
                    </div>
                </div>
                <div className={"flex items-center"}>
                    <ProjectCard project={project}/>
                </div>
            </div>
        </div>
    );
}