import React from 'react';
import fs from 'fs';
import path from 'path';
import {ExperienceMDX} from "@app/(professional-experience)/experience-mdx";

export async function getExperienceMdx()
{
    const filePath = path.join(process.cwd(), 'src/app/(professional-experience)/professional-experience.mdx');
    return fs.readFileSync(filePath, 'utf8');
}

export default async function ProfessionalExperience()
{
    const content = await getExperienceMdx();

    return (
        <section id="professional-experience">
            <h2 className="font-bold text-3xl mb-8 tracking-tighter">
                Professional Experience
            </h2>
            <div className="prose prose-neutral dark:prose-invert">
                <ExperienceMDX source={content}/>
            </div>
        </section>
    );
}