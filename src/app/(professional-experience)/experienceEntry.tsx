import React, {ReactNode} from 'react';
import path from "path";
import fs from "fs";
import {notFound} from "next/navigation";
import {CustomMDX} from "@components/mdx";
import {Tag} from "@components/tag";
import matter from "gray-matter";

export const experiencesDir = path.join(process.cwd(), 'src', 'app', '(professional-experience)', 'markdown');

export interface Experience
{
    slug: string;
    title: string;
    years: string;
    tags?: string;
}

export async function loadExperience(slug: string)
{
    const filePath = path.join(experiencesDir, `${slug}.mdx`);
    if (!fs.existsSync(filePath))
    {
        throw new Error(`MDX file not found: ${filePath}`);
    }

    const rawSource = await fs.promises.readFile(filePath, 'utf8');
    const {data, content} = matter(rawSource);
    return {
        experience: data as Experience,
        content
    };
}

export async function ExperienceEntry({
                                          title,
                                          experienceSlug,
                                          visual,
                                      }: {
    title: string;
    experienceSlug: string;
    visual?: ReactNode;
})
{
    const {content, experience} = await loadExperience(experienceSlug);
    if (!experience)
    {
        return notFound();
    }

    return (
        <div className={"prose mb-8 md:mb-10"}>
            <div className={"grid grid-cols-1 md:grid-cols-1 md:gap-2 bg-white dark:bg-neutral-700 px-4 md:px-8 md: pb-4 md:pb-8"}>
                <div>
                    <h1>{title} </h1>
                    {experience.tags && (
                        <div className={"flex flex-wrap gap-2"}>
                            {experience.tags.split(',').map((tag, index) => (
                                <Tag key={index} bgColor={"bg-gray-300 dark:bg-gray-800"}>{tag.trim()}</Tag>
                            ))}
                        </div>
                    )}
                    <CustomMDX source={content}/>
                </div>

                {visual && (
                    <div className="w-full flex justify-center items-center">
                        <div className="w-full max-w-screen-sm">
                            {visual}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}